import React, { Component } from "react";
import Products from "../Products";
import { withRouter } from "react-router";
import SingleProductContext from "../../context/singleproductcontext/single-product-context";

class Categories extends Component {
  static contextType = SingleProductContext;
  render() {
    const categoryName = this.props.match.params.category;
    return (
      <main>
        <Products categoryName={categoryName} />;
      </main>
    );
  }
}

export default withRouter(Categories);
