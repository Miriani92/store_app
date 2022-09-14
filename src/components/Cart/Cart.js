import React, { Component } from "react";
import SingleCartItem from "./SingleCartItem";
import styles from "./Cart.module.css";
import Button from "../../UI/Button";
import SingleProductContext from "../../context/singleproductcontext/single-product-context";

class Cart extends Component {
  static contextType = SingleProductContext;

  render() {
    const { singleProduct, totalQuantity, totalPrice, choseCurrencySymbol } =
      this.context;
    if (totalPrice == 0) {
      return <div className={styles.noitems}> No items in the cart</div>;
    }
    return (
      <div className={styles.cart}>
        <h1 className={styles.cartname}>Cart</h1>
        <div className={styles.line}></div>
        {singleProduct.map((product, index) => {
          return <SingleCartItem {...product} key={index} />;
        })}
        <h3 className={styles.tax}>
          Tax 21%:
          <span style={{ marginLeft: 21, fontWeight: 700 }}>
            {choseCurrencySymbol + ((totalPrice * 21) / 100).toFixed(2)}
          </span>
        </h3>
        <h3 className={styles.productQuantity}>
          Quantity: <span style={{ fontWeight: 700 }}>{totalQuantity}</span>
        </h3>
        <h3 className={styles.totalPrice}>
          Total:{" "}
          <span style={{ marginLeft: 43, fontWeight: 700 }}>
            {choseCurrencySymbol + totalPrice.toFixed(2)}
          </span>{" "}
        </h3>
        <Button
          text="ORDER"
          style={{
            border: "none",
            display: "block",
            fontWeight: 600,
            width: 280,
            height: 45,
            backgroundColor: "#5ECE7B",
            color: "white",
            fontFamily: "Raleway",
            marginTop: 16,
            fontSize: 14,
          }}
        />
      </div>
    );
  }
}

export default Cart;
