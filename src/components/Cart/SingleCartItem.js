import React, { Component } from "react";
import styles from "./SingleCartItem.module.css";
import Attributes from "../../UI/Attributes";
import Gallery from "../Gallery";
import ChoseCurrency from "../ChosenCurrency";
import SingleProductContext from "../../context/singleproductcontext/single-product-context";

class SingleCartItem extends Component {
  static contextType = SingleProductContext;
  constructor(props) {
    super(props);
  }

  render() {
    const { chosenCurrencyInd, countTotalProducts, changeQuantity } =
      this.context;
    return (
      <div className={styles.cartitem}>
        <div>
          <h1>{this.props.name}</h1>
          <h1>{this.props.category}</h1>
          <div>
            <ChoseCurrency
              symbol={
                this.props.prices &&
                this.props.prices[chosenCurrencyInd].currency.symbol
              }
              amount={
                this.props.prices && this.props.prices[chosenCurrencyInd].amount
              }
            />
          </div>
          <Attributes attributes={this.props.attributes} />
        </div>
        <div>
          <div className={styles.buttonswrapper}>
            <div className={styles.buttons}>
              <button
                className={styles.plusbtn}
                onClick={() => {
                  changeQuantity(this.props.id, "plus");
                  countTotalProducts("plus");
                }}
              >
                +
              </button>
              <div>
                <h3 className={styles.quantity}>{this.props.value}</h3>
              </div>
              <button
                className={styles.minusbtn}
                onClick={() => {
                  changeQuantity(this.props.id, "minus");
                  countTotalProducts("minus");
                }}
              >
                -
              </button>
            </div>
            <Gallery gallery={this.props.gallery} />
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCartItem;
