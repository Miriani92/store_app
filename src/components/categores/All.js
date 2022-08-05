import React, { Component } from "react";
import Products from "../Products";

class All extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <h2>All</h2>
        <Products category="all" />;
      </main>
    );
  }
}

export default All;
