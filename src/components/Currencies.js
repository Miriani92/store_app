import React, { Component } from "react";
import styles from "./Currencies.module.css";
import Loading from "./Loading";
import SingleProductContext from "../context/singleproductcontext/single-product-context";

class Currencies extends Component {
  static contextType = SingleProductContext;

  render() {
    if (this.context.Loading) return <Loading />;
    const {
      currencies: { currencies },
      changeCurrencyOption,
    } = this.context;

    return (
      <div>
        <select
          name="currencies"
          id="currencies-select"
          onChange={(e) => changeCurrencyOption(e.target.value)}
        >
          {currencies.map((currency, ind) => {
            return (
              <option key={currency.label} value={[ind, currency.symbol]}>
                {currency.symbol} {currency.label}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Currencies;
