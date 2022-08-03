import React, { Component } from "react";
import styles from "./Cart-bag.module.css";
import SingleProductContext from "../../context/singleproductcontext/single-product-context";

class CartBag extends Component {
  static contextType = SingleProductContext;
  render() {
    return <div className={styles.cartwrapper}> </div>;
  }
}

export default CartBag;
