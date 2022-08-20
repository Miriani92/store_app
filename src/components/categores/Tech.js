import React, { Component } from "react";
import styles from "./Tech.module.css";
import Products from "../Products";

class Tech extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.techCategory}>Tech</h2>
        <Products category="tech" />
      </div>
    );
  }
}

export default Tech;
