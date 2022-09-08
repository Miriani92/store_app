import React, { Component } from "react";
import styles from "./ProductCard.module.css";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import SingleProductContext from "../context/singleproductcontext/single-product-context";
import ChoseCurrency from "./ChosenCurrency";

class ProductCard extends Component {
  static contextType = SingleProductContext;
  constructor(props) {
    super(props);
  }
  render() {
    const { name, gallery, id, prices } = this.props;
    const { chosenCurrencyInd, addToCart } = this.context;
    const currencyData = prices[chosenCurrencyInd];

    return (
      <div className={styles.productWrapper}>
        <Link to={`singleproduct/${id}`} className={styles.button} />
        <div className={styles.wrapper}>
          <img src={gallery[0]} className={styles.img} />
          <p>{name}</p>
          <Link
            className={styles.cartButton}
            to="/cart"
            onClick={() => addToCart(id)}
          >
            <BsCart />
          </Link>
          <div>
            <ChoseCurrency
              symbol={currencyData.currency.symbol}
              amount={currencyData.amount}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
