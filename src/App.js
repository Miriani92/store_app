import React, { Component } from "react";
import Page from "./page/Page";
import SingleProductContext from "./context/singleproductcontext/single-product-context";

class App extends Component {
  static contextType = SingleProductContext;

  render() {
    if (!this.context.categories.categories) {
      return <h3>loadign....</h3>;
    }
    return (
      <Page
        symbol={this.context.choseCurrencySymbol}
        totalItems={this.context.totalQuantity}
        categories={this.context.categories.categories}
      />
    );
  }
}

export default App;
