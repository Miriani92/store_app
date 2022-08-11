import React, { Component } from "react";
import SingleCartItem from "./SingleCartItem";
import SingleProductContext from "../../context/singleproductcontext/single-product-context";
import Loading from "../Loading";

class Cart extends Component {
  static contextType = SingleProductContext;
  constructor(props) {
    super(props);
  }

  render() {
    const { singleProduct, totalQuantity } = this.context;

    return (
      <div>
        {singleProduct.map((product) => {
          return <SingleCartItem {...product} key={product.id} />;
        })}
        <h3>{totalQuantity}</h3>
      </div>
    );
  }
}

export default Cart;
