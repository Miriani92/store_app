import React, { Component } from "react";
import Products from "../Products";

class Tech extends Component {
  render() {
    return (
      <div>
        <h2>Tech</h2>
        <Products category="tech" />
      </div>
    );
  }
}

export default Tech;
