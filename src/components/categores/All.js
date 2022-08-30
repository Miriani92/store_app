import React, { Component } from "react";
import styles from "./All.module.css";
import Products from "../Products";

class All extends Component {
  render() {
    return (
      <main>
        <h2 className={styles.allCategory}>All</h2>
        <Products category="all" />;
      </main>
    );
  }
}

export default All;
