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
    return (
      <div className={styles.attributes}>
        {this.props.attributes.map((attr, index) => {
          const { name } = attr;
          return (
            <div key={index}>
              <h4>{name.toUpperCase()}</h4>
              {attr.items.map((item, ind) => {
                return (
                  <Item
                    key={ind}
                    item={item}
                    attr={attr}
                    index={index}
                    chooseAttribute={chooseAttribute.bind(
                      null,
                      index,
                      item.value
                    )}
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
