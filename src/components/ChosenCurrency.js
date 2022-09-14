import React, { Component } from "react";
import styles from "./ChosenCurrency.module.css";

class ChoseCurrency extends Component {
  render() {
    const quantity = this.props.quantity ? this.props.quantity : 1;
    const pruductCarsStyle = this.props.style;
    return (
      <>
        <span
          className={this.props.cartBag && styles["bag-currency"]}
          style={pruductCarsStyle && pruductCarsStyle}
        >
          {this.props.symbol + (this.props.amount * quantity).toFixed(2)}
        </span>
      </>
    );
  }
}

export default ChoseCurrency;
