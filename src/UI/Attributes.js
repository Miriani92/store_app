import React, { Component } from "react";
import styles from "./Attributes.module.css";
import Item from "./Item";
import SingleProductContext from "../context/singleproductcontext/single-product-context";

class Attributes extends Component {
  static contextType = SingleProductContext;
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.attributes.length === 0) return null;

    const { chooseAttribute } = this.context;
    const cartBag = this.props.cartBag;

    return (
      <div className={styles.attributes}>
        {this.props.attributes.map((attr, index) => {
          const { name } = attr;
          return (
            <div key={index}>
              <h4
                className={cartBag && styles["bag-name"]}
                style={{ marginBottom: "10px" }}
              >
                {name.toUpperCase()}:
              </h4>
              {attr.items.map((item, ind) => {
                return (
                  <Item
                    key={ind}
                    selectedAttribute={this.props.selectedAttribute}
                    item={item}
                    attr={attr}
                    index={index}
                    productId={this.props.id}
                    cartBag={cartBag}
                    chooseAttribute={chooseAttribute}
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
