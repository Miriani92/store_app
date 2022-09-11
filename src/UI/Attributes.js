import React, { Component } from "react";
import styles from "./Attributes.module.css";
import Item from "./Item";
import SingleProductContext from "../context/singleproductcontext/single-product-context";

class Attributes extends Component {
  static contextType = SingleProductContext;
  constructor(props) {
    super(props);
    // this.state = {
    //   ...this.props.selectedAttribute,
    // };
  }

  componentDidMount() {
    if (this.props.addSingleProductAttr) {
      this.props.addSingleProductAttr();
    }
  }

  // chooseAttForSinbleProduct = (index, attribute, productId) => {
  //   this.setState({
  //     ...this.state,
  //     [productId]: { ...this.state[productId], [index]: attribute },
  //   });
  //   this.context.setAttrForSingleProduct(this.state);
  // };
  render() {
    if (!this.props.attributes.length === 0) return null;

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
