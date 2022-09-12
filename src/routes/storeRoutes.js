import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Categories from "../components/categores/Categories";
import Cart from "../components/Cart/Cart";
import SingleProduct from "../components/SingleProduct";
class RouterWrapper extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Categories} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/:category" exact component={Categories} />
        <Route
          path="/:category/singleproduct/:id"
          exact
          component={SingleProduct}
        />
      </Switch>
    );
  }
}

export default RouterWrapper;
