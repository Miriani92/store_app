import React, { Component } from "react";
import styles from "./Attributes.module.css";
import Item from "./Item";
import SingleProductContext from "../context/singleproductcontext/single-product-context";

class Attributes extends Component {
  static contextType = SingleProductContext;
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.addSingleProductAttr) {
      this.props.addSingleProductAttr();
    }
  }

  render() {
    if (!this.props.attributes.length === 0) return null;

    const cartBag = this.props.cartBag;

    return (
      <div className={styles.attributes}>
        {this.props.attributes.map((attr, index) => {
          const { name } = attr;
          return (
            <div key={index}>
              <h4 className={cartBag && styles["bag-name"]}>{name}:</h4>
              {attr.items.map((item, ind) => {
                return (
                  <Item
                    key={ind}
                    item={item}
                    attr={attr}
                    index={index}
                    productId={this.props.id}
                    cartBag={cartBag}
                    cartChosenAttributes={this.props.cartChosenAttributes}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Attributes;
