import React, { Component } from "react";
import SingleProductContext from "../../context/singleproductcontext/single-product-context";

class Cart extends Component {
  static contextType = SingleProductContext;
  render() {
    console.log(this.context.singleProduct);
    return (
      <div>
        <h1>Cart</h1>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Cart;
