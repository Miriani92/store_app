import React, { Component } from "react";
import styles from "./SingleProduct.module.css";
import Loading from "./Loading";
import { CartContext } from "../context/cartcontext/Cart-actions";
import { withRouter } from "react-router";

class SingleProduct extends Component {
  static contextType = CartContext;
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.match.params.id);
  }

  componentDidMount() {
    const { data, loading, error } = this.context;

    if (loading) return <Loading />;

    const product = data.category.products.find(
      (product) => product.id === this.props.match.params.id
    );
    this.setState({
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
    return (
      <div>
        <h1>{name}</h1>
        <button className={styles.button}>Click and add to the cart</button>
      </div>
    );
  }
}

export default withRouter(SingleProduct);

// priority applay the fetched single product to the to the state

// when we click button we must send info
// --- onClick --->context
