import React, { Component } from "react";
import Products from "../Products";

class All extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Products />;
      </main>
    );
  }
}

export default All;
