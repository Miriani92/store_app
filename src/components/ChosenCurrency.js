import React, { Component } from "react";
import styles from "./ChosenCurrency.module.css";

class ChoseCurrency extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <span className={this.props.cartBag && styles["cart-currency"]}>
          {this.props.symbol + this.props.amount}
        </span>
      </>
    );
  }
}

export default ChoseCurrency;
