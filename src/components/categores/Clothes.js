import React, { Component } from "react";
import styles from "./Clothes.module.css";
import Products from "../Products";

class Clothes extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.clothesCategory}>Clothes</h2>
        <Products category="clothes" />
      </div>
    );
  }
}

export default Clothes;
