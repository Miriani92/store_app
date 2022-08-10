import React, { Component } from "react";
import SingleCartItem from "./SingleCartItem";
import SingleProductContext from "../../context/singleproductcontext/single-product-context";
import Loading from "../Loading";

class Cart extends Component {
  static contextType = SingleProductContext;
  render() {
    if (this.context.loading) {
      return <Loading />;
    }
    const { singleProduct } = this.context;
    return (
      <div>
        {singleProduct.map((product) => {
          return <SingleCartItem {...product} key={product.id} />;
        })}

        <h1>thre goes the h1 one</h1>
      </div>
    );
  }
}

export default Cart;
