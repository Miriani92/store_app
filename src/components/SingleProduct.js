import React, { Component } from "react";
import styles from "./SingleProduct.module.css";
import Loading from "./Loading";
import SingleProductContext from "../context/singleproductcontext/single-product-context";
import { withRouter } from "react-router";

class SingleProduct extends Component {
  static contextType = SingleProductContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { data, loading, error } = this.context;

    if (loading) return <Loading />;

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
    });
  }
  render() {
    const { name, brand, category, description, gallery, inStock, prices } =
      this.state;
    const { addToCart } = this.context;
    return (
      <div>
        <h1>{name}</h1>
        <button
          className={styles.button}
          onClick={() => addToCart(this.props.match.params.id)}
        >
          ADD TO CART
        </button>
      </div>
    );
  }
}

export default withRouter(SingleProduct);
