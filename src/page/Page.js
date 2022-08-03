import React, { Component } from "react";
import Header from "../components/Header";
import Routes from "../routes/storeRoutes";
import CartBag from "../components/Cart/Cart-bag";
import { CartContext } from "../context/Cart-actions";

class Page extends Component {
  static contextType = CartContext;
  render() {
    const { isCartOpen } = this.context;

    return (
      <div>
        <Header />
        {isCartOpen ? <CartBag /> : null}
        <Routes />
      </div>
    );
  }
}

export default Page;
