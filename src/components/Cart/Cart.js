import React, { Component } from "react";
import SingleCartItem from "./SingleCartItem";
import SingleProductContext from "../../context/singleproductcontext/single-product-context";

class Cart extends Component {
  static contextType = SingleProductContext;

  constructor(props) {
    super(props);
  }

  render() {
    const { singleProduct, totalQuantity, totalPrice, choseCurrencySymbol } =
      this.context;

    return (
      <div>
        {singleProduct.map((product) => {
          return <SingleCartItem {...product} key={product.id} />;
        })}
        <h3>Tax 21%: {choseCurrencySymbol + (totalPrice * 21) / 100}</h3>
        <h3>{choseCurrencySymbol + totalPrice}</h3>
        <h3>{totalQuantity}</h3>
      </div>
    );
  }
}

export default Cart;
