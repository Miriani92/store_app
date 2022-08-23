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
    const cartBag = this.props.cartBag;

    return (
      <div
        className={
          cartBag
            ? `${styles.cartitem} ${styles["bag-cartitem"]}`
            : styles.cartitem
        }
      >
        <div>
          <h1 className={cartBag && styles["bag-name"]}>{this.props.name}</h1>
          <h1>{!cartBag && this.props.category}</h1>
          <div>
            <ChoseCurrency
              symbol={
                this.props.prices &&
                this.props.prices[chosenCurrencyInd].currency.symbol
              }
              amount={
                this.props.prices && this.props.prices[chosenCurrencyInd].amount
              }
              cartBag={cartBag}
            />
          </div>
          <Attributes attributes={this.props.attributes} cartBag={cartBag} />
        </div>
        <div>
          <div
            className={
              cartBag
                ? `${styles.buttonswrapper} ${styles["bag-buttonswrapper"]}`
                : styles.buttonswrapper
            }
          >
            <div
              className={
                cartBag
                  ? `${styles.buttons} ${styles["bag-buttons"]}`
                  : styles.buttons
              }
            >
              <button
                className={
                  cartBag
                    ? `${styles.plusbtn} ${styles["bag-plusbtn"]}`
                    : styles.plusbtn
                }
                onClick={() => {
                  changeQuantity(this.props.id, "plus");
                  countTotalProducts("plus");
                }}
              >
                +
              </button>
              <div>
                <h3
                  className={
                    cartBag
                      ? `${styles.quantity} ${styles["bag-quantity"]}`
                      : styles.quantity
                  }
                >
                  {this.props.value}
                </h3>
              </div>
              <button
                className={
                  cartBag
                    ? `${styles.minusbtn} ${styles["bag-minusbtn"]}`
                    : styles.minusbtn
                }
                onClick={() => {
                  changeQuantity(this.props.id, "minus");
                  countTotalProducts("minus");
                }}
              >
                -
              </button>
            </div>
            <Gallery gallery={this.props.gallery} cartBag={cartBag} />
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCartItem;
