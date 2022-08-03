import React, { Component } from "react";
import { withRouter } from "react-router";
import { CartContext } from "../../context/Cart-actions";
import Loading from "../Loading";

class Cart extends Component {
  static contextType = CartContext;
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
      name: product.name,
      brand: product.brand,
      category: product.category,
      description: product.description,
      gallery: product.gallery,
      inStock: product.inStock,
      prices: product.prices,
    });
    console.log(product);
  }
  render() {
    const { name, brand, category, description, gallery, inStock, prices } =
      this.state;
    return (
      <div>
        <h1>Cart</h1>
        <div>
          <div>
            <h2>{name}</h2>
            <h2>{category}</h2>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default withRouter(Cart);
