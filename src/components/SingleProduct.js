import React, { Component } from "react";
import styles from "./SingleProduct.module.css";
import Loading from "./Loading";
import SingleProductContext from "../context/singleproductcontext/single-product-context";
import Attributes from "../UI/Attributes";
import { withRouter } from "react-router";

class SingleProduct extends Component {
  static contextType = SingleProductContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.context.loading) return <Loading />;
    const { data, loading, error } = this.context;

    const product = data.category.products.find(
      (product) => product.id === this.props.match.params.id
    );
    console.log(product);
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
    const { addToCart } = this.context;
    return (
      <article className={styles.singleproductwrapper}>
        <div>
          {gallery &&
            gallery.map((image) => {
              return (
                <div>
                  <button className={styles.imagebutton}>
                    <img src={image} className={styles.images} />
                  </button>
                </div>
              );
            })}
        </div>
        <div>
          <h1>{name}</h1>
          {attributes && <Attributes attributes={attributes} />}
          <h3>Price:</h3>
          <p>$50</p>
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
