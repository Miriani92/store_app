import React, { Component } from "react";
import Page from "./page/Page";
import SingleProductContext from "./context/singleproductcontext/single-product-context";

class App extends Component {
  static contextType = SingleProductContext;
  render() {
    return (
      <Page
        symbol={this.context.choseCurrencySymbol}
        totalItems={this.context.totalQuantity}
      />
    );
  }
}

export default App;
