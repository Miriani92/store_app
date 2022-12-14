import React, { Component } from "react";
import styles from "./Cart-bag.module.css";
import Button from "../../UI/Button";
import Modal from "../../modal/Modal";
import SingleProductContext from "../../context/singleproductcontext/single-product-context";
import SingleCartItem from "./SingleCartItem";

class CartBag extends Component {
  static contextType = SingleProductContext;

  constructor(props) {
    super(props);
    this.state = {
      maxHeight: window.innerHeight,
    };
  }

  componentDidMount() {
    let clientHeight = document.getElementById("cart-bag").clientHeight;
    let windowHeight = window.innerHeight;
    if (clientHeight >= windowHeight) {
      this.setState({ overflow: "scroll", width: 340 });
    }
  }

  render() {
    const { singleProduct, totalQuantity, totalPrice, choseCurrencySymbol } =
      this.context;

    return (
      <Modal>
        <div className={styles.cartbag} id="cart-bag" style={this.state}>
          <h3
            className={totalPrice !== 0 ? styles.quantity : styles.centerText}
          >
            My Bag.{" "}
            <span className={styles.totalitems}>{totalQuantity} items</span>
          </h3>
          {singleProduct.map((product, index) => {
            return (
              <SingleCartItem {...product} key={index} cartBag="cartBag" />
            );
          })}
          <div className={totalPrice !== 0 ? styles.price : styles.displaynone}>
            <h3 className={styles.total}>Total</h3>
            <h4 style={{ fontSize: 14 }}>
              {choseCurrencySymbol + totalPrice.toFixed(2)}
            </h4>
          </div>
          <div
            className={totalPrice !== 0 ? styles.buttons : styles.displaynone}
          >
            <Button text="VIEW BAG" />
            <Button
              text="CHECK OUT"
              style={{
                backgroundColor: "#5ECE7B",
                color: "#FFFFFF",
                border: "none",
              }}
            />
          </div>
        </div>
      </Modal>
    );
  }
}

export default CartBag;
