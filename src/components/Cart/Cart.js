import React, { Component } from "react";
import SingleCartItem from "./SingleCartItem";
import styles from "./Cart.module.css";
import Button from "../../UI/Button";
import SingleProductContext from "../../context/singleproductcontext/single-product-context";

class Cart extends Component {
  static contextType = SingleProductContext;

  constructor(props) {
    super(props);
  }

  render() {
    const { singleProduct, totalQuantity, totalPrice, choseCurrencySymbol } =
      this.context;

    return (
      <div className={styles.cart}>
        <h1>Cart</h1>
        <div className={styles.line}></div>
        {singleProduct.map((product) => {
          return <SingleCartItem {...product} key={product.id} />;
        })}
        <h3>
          Tax 21%:
          <span>
            {choseCurrencySymbol + ((totalPrice * 21) / 100).toFixed(2)}
          </span>
        </h3>
        <h3>
          Quantity: <span>{totalQuantity}</span>
        </h3>
        <h3>
          Total: <span>{choseCurrencySymbol + totalPrice.toFixed(2)}</span>{" "}
        </h3>
        <Button
          text="ORDER"
          style={{
            width: 280,
            height: 45,
            backgroundColor: "green",
            color: "white",
            marginTop: 20,
          }}
        />
      </div>
    );
  }
}

export default Cart;
