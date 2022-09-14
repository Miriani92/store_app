import React, { Component } from "react";
import styles from "./ChosenCurrency.module.css";

class ChoseCurrency extends Component {
  render() {
    const quantity = this.props.quantity ? this.props.quantity : 1;
    return (
      <>
        <span className={this.props.cartBag && styles["bag-currency"]}>
          {this.props.symbol + (this.props.amount * quantity).toFixed(2)}
        </span>
      </>
    );
  }
}

export default ChoseCurrency;
