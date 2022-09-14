import React, { Component } from "react";
import styles from "./Currencies.module.css";
import SingleProductContext from "../context/singleproductcontext/single-product-context";

class Currencies extends Component {
  static contextType = SingleProductContext;

  render() {
    const {
      currencies: { currencies },
      changeCurrencyOption,
    } = this.context;

    return (
      <div className={styles.currencyWrapper}>
        <div className={styles.buttonWrapper}>
          {currencies.map((currency, ind) => {
            return (
              <div key={currency.label} onClick={this.props.changeCurrency}>
                <button
                  value={ind}
                  onClick={(e) => {
                    changeCurrencyOption(e.target.value);
                  }}
                  className={styles.button}
                >
                  {currency.symbol} {currency.label}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Currencies;
