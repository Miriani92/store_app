import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Allproducts from "../components/categores/All";
import Tech from "../components/categores/Tech";
import Clothes from "../components/categores/Clothes";
import Cart from "../components/Cart/Cart";
import SingleProduct from "../components/SingleProduct";
class RouterWrapper extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Allproducts} />
        <Route path="/clothes" component={Clothes} />
        <Route path="/tech" component={Tech} />
        <Route path="/singleproduct/:id" component={SingleProduct} />
        <Route path="/cart" component={Cart} />
      </Switch>
    );
  }
}

export default RouterWrapper;
