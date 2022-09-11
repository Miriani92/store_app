import React, { Component } from "react";
import styles from "./Item.module.css";
import SingleProductContext from "../context/singleproductcontext/single-product-context";

class Item extends Component {
  static contextType = SingleProductContext;
  constructor(props) {
    super(props);
  }

  render() {
    const { changeAttribute, singleProductAttr } = this.context;
    const cartBag = this.props.cartBag;

    let attributes = {
      ...singleProductAttr,
      ...this.props.cartChosenAttributes,
    };

    return (
      <button
        key={this.props.item.id}
        className={
          attributes[this.props.productId] &&
          attributes[this.props.productId][this.props.index] ===
            this.props.item.value
            ? ` ${styles.button} ${cartBag && styles["cart-button"]} ${
                styles.add
              } `
            : cartBag
            ? `${styles.button} ${styles["cart-button"]}`
            : styles.button
        }
        onClick={() =>
          changeAttribute(
            this.props.index,
            this.props.item.value,
            this.props.productId
          )
        }
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
