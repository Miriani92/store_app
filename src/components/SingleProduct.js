import React, { Component } from "react";
import styles from "./SingleProduct.module.css";
import Loading from "./Loading";
import SingleProductContext from "../context/singleproductcontext/single-product-context";
import Attributes from "../UI/Attributes";
import ChoseCurrency from "./ChosenCurrency";
import { withRouter } from "react-router";
import Currencies from "./Currencies";

class SingleProduct extends Component {
  static contextType = SingleProductContext;
  constructor(props) {
    super(props);

    this.changeImgIdx = this.changeImgIdx.bind(this);
    this.state = { imageIDX: 0 };
  }

  componentDidMount() {
    if (this.context.loading) return <Loading />;
    const { data, loading, error } = this.context;

    const product = data.category.products.find(
      (product) => product.id === this.props.match.params.id
    );

    this.setState({
      id: product.id,
      name: product.name,
      brand: product.brand,
      category: product.category,
      description: product.description,
      gallery: product.gallery,
      inStock: product.inStock,
      prices: product.prices,
      attributes: product.attributes,
    });
  }

  changeImgIdx(index) {
    this.setState({ imageIDX: index });
  }

  render() {
    const {
      name,
      brand,
      category,
      description,
      gallery,
      inStock,
      prices,
      attributes,
    } = this.state;
    const { addToCart, chosenCurrencyInd } = this.context;

    return (
      <article className={styles.singleproductwrapper}>
        <div className={styles.gallerywrapper}>
          <div>
            {gallery &&
              gallery.map((image, index) => {
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
          <img src={gallery && gallery[this.state.imageIDX]} />
        </div>
        <div>
          <h1>{name}</h1>
          <h3>{brand}</h3>
          <h4>{category}</h4>
          {attributes && <Attributes attributes={attributes} />}
          <h3>Price:</h3>
          <div>
            <ChoseCurrency
              symbol={prices && prices[chosenCurrencyInd].currency.symbol}
              amount={prices && prices[chosenCurrencyInd].amount}
            />
          </div>
          <button
            className={styles.button}
            onClick={() => addToCart(this.props.match.params.id)}
          >
            ADD TO CART
          </button>
          <div dangerouslySetInnerHTML={{ __html: `${description}` }}></div>
        </div>
      </article>
    );
  }
}

export default withRouter(SingleProduct);
