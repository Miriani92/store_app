import React, { Component } from "react";
import styles from "./SingleProduct.module.css";
import Loading from "./Loading";
import SingleProductContext from "../context/singleproductcontext/single-product-context";
import Attributes from "../UI/Attributes";
import ChoseCurrency from "./ChosenCurrency";
import { predefineAttribute } from "../utils/predefinedAttribute";
import { withRouter } from "react-router";

class SingleProduct extends Component {
  static contextType = SingleProductContext;
  constructor(props) {
    super(props);
    this.changeImgIdx = this.changeImgIdx.bind(this);
    this.state = { imageIDX: 0 };
  }

  changeImgIdx(index) {
    this.setState({ imageIDX: index });
  }

  render() {
    if (this.context.loading) return <Loading />;
    const { data } = this.context;

    const product = data.category.products.find(
      (product) => product.id === this.props.match.params.id
    );
    const selectedAttribute = predefineAttribute(
      product.id,
      product.attributes
    );

    const { addToCart, chosenCurrencyInd } = this.context;

    return (
      <article className={styles.singleproductwrapper}>
        <div className={styles.gallerywrapper}>
          <div>
            {product.gallery &&
              product.gallery.map((image, index) => {
                return (
                  <div key={index}>
                    <button
                      className={styles.imagebutton}
                      onClick={() => this.changeImgIdx(index)}
                    >
                      <img src={image} className={styles.images} />
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
        <img
          className={styles.mainImage}
          src={product.gallery && product.gallery[this.state.imageIDX]}
        />
        <div>
          <h1>{product.name}</h1>
          <h1 className={styles.brand}>{product.brand}</h1>
          {product.attributes && (
            <Attributes
              attributes={product.attributes}
              id={product.id}
              selectedAttribute={selectedAttribute}
            />
          )}
          <h4 className={styles.price}>PRICE:</h4>
          <div className={styles.priceWrapper}>
            <ChoseCurrency
              symbol={
                product.prices &&
                product.prices[chosenCurrencyInd].currency.symbol
              }
              amount={
                product.prices && product.prices[chosenCurrencyInd].amount
              }
            />
          </div>
          <button
            className={
              product.inStock
                ? styles.button
                : `${styles.button} ${styles.disableBtn}`
            }
            disabled={!product.inStock && true}
            onClick={() => addToCart(this.props.match.params.id)}
          >
            ADD TO CART
          </button>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: `${product.description}` }}
          ></div>
        </div>
      </article>
    );
  }
}

export default withRouter(SingleProduct);
