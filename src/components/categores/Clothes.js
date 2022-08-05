import React, { Component } from "react";
import Products from "../Products";

class Clothes extends Component {
  render() {
    return (
      <div>
        <h2>Clothes</h2>
        <Products category="clothes" />
      </div>
    );
  }
}

export default Clothes;
