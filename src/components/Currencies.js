import React, { Component } from "react";
import styles from "./Currencies.module.css";
import SingleProductContext from "../context/singleproductcontext/single-product-context";

class Currencies extends Component {
  static contextType = SingleProductContext;
  render() {
    console.log(this.context);
    return (
      <div>
        <select name="pets" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div>
    );
  }
}

export default Currencies;
