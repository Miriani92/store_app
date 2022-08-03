import React, { Component } from "react";
import styles from "./ProductCard.module.css";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, gallery, id } = this.props;
    return (
      <div className={styles.productWrapper}>
        <div className={styles.wrapper}>
          <img src={gallery[0]} className={styles.img} />
          <p>{name}</p>
          <Link className={styles.cartButton} to={`/${id}`}>
            <BsCart />
          </Link>
          <p>$50</p>
        </div>
      </div>
    );
  }
}

export default ProductCard;
