import React, { Component } from "react";
import styles from "./Item.module.css";
import SingleProductContext from "../context/singleproductcontext/single-product-context";

class Item extends Component {
  static contextType = SingleProductContext;
  constructor(props) {
    super(props);
  }

  render() {
    const { chosenAttribute } = this.context;
    const cartBag = this.props.cartBag;

    return (
      <button
        key={this.props.item.id}
        className={
          chosenAttribute[this.props.index] === this.props.item.value
            ? ` ${styles.button} ${cartBag && styles["cart-button"]} ${
                styles.add
              } `
            : cartBag
            ? `${styles.button} ${styles["cart-button"]}`
            : styles.button
        }
        onClick={() => this.props.chooseAttribute()}
        style={{
          backgroundColor:
            this.props.attr.type === "swatch" && `${this.props.item.value}`,
        }}
      >
        {this.props.attr.type !== "swatch" && this.props.item.value}
      </button>
    );
  }
}

export default Item;
