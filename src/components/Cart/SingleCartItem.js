import React, { Component } from "react";
import styles from "./SingleCartItem.module.css";
import Attributes from "../../UI/Attributes";
import Gallery from "../Gallery";
import ChoseCurrency from "../ChosenCurrency";
import SingleProductContext from "../../context/singleproductcontext/single-product-context";

class SingleCartItem extends Component {
  static contextType = SingleProductContext;

  render() {
    const { chosenCurrencyInd, countTotalProducts, changeQuantity } =
      this.context;
    const cartBag = this.props.cartBag;
    const product = this.props;

    return (
      <div
        className={
          cartBag
            ? `${styles.cartitem} ${styles["bag-cartitem"]}`
            : styles.cartitem
        }
      >
        <div>
          <h2
            className={`${styles.productName} ${cartBag && styles["bag-name"]}`}
          >
            {this.props.name}
          </h2>
          <h2 className={styles.categoryname} style={{ fontWeight: 500 }}>
            {!cartBag && this.props.category}
          </h2>
          <div className={styles.currency}>
            <ChoseCurrency
              symbol={
                this.props.prices &&
                this.props.prices[chosenCurrencyInd].currency.symbol
              }
              amount={
                this.props.prices && this.props.prices[chosenCurrencyInd].amount
              }
              quantity={this.props.value}
              cartBag={cartBag}
            />
          </div>
          <Attributes
            attributes={this.props.attributes}
            id={this.props.id}
            cartBag={cartBag}
            cartChosenAttributes={this.props.chosenAttribute}
          />
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
                  changeQuantity(product, "plus");
                  countTotalProducts("plus");
                }}
              >
                +
              </button>
              <div
                className={`${
                  cartBag ? styles["bag-quantity"] : styles.quantity
                }`}
              >
                {this.props.value}
              </div>
              <button
                className={
                  cartBag
                    ? `${styles.minusbtn} ${styles["bag-minusbtn"]}`
                    : styles.minusbtn
                }
                onClick={() => {
                  changeQuantity(product, "minus");
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
