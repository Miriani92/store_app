import React, { Component } from "react";
import styles from "./ProductCard.module.css";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import SingleProductContext from "../context/singleproductcontext/single-product-context";

class ProductCard extends Component {
  static contextType = SingleProductContext;
  constructor(props) {
    super(props);
  }
  render() {
    const { name, gallery, id, prices } = this.props;
    const { chosenCurrencyInd } = this.context;
    const currencyData = prices[chosenCurrencyInd];

    return (
      <div className={styles.productWrapper}>
        <Link to={`singleproduct/${id}`} className={styles.button} />
        <div className={styles.wrapper}>
          <img src={gallery[0]} className={styles.img} />
          <p>{name}</p>
          <Link className={styles.cartButton} to="/cart">
            <BsCart />
          </Link>
          <div>
            <span>{currencyData.currency.symbol}</span>
            <span>{currencyData.amount}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
