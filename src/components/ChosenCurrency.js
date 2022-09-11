import React, { Component } from "react";
import styles from "./ChosenCurrency.module.css";

class ChoseCurrency extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const quantity = this.props.quantity ? this.props.quantity : 1;
    return (
      <>
        <span className={this.props.cartBag && styles["cart-currency"]}>
          {this.props.symbol + this.props.amount * quantity}
        </span>
      </>
    );
  }
}

export default ChoseCurrency;
