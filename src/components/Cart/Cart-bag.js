import React, { Component } from "react";
import styles from "./Cart-bag.module.css";
import Loading from "../Loading";
import SingleProductContext from "../../context/singleproductcontext/single-product-context";
import SingleCartItem from "./SingleCartItem";

class CartBag extends Component {
  static contextType = SingleProductContext;

  constructor(props) {
    super(props);
    this.state = {
      cuantity: this.props.value,
    };
  }
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
      </div>
    );
  }
}

export default CartBag;
