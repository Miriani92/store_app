import React, { Component } from "react";
import Header from "../components/Header";
import Routes from "../routes/storeRoutes";
import CartBag from "../components/Cart/Cart-bag";
import Currencies from "../components/Currencies";
import { CartContext } from "../context/cartcontext/Cart-actions";

class Page extends Component {
  static contextType = CartContext;
  constructor(props) {
    super(props);
  }
  render() {
    const { isCartOpen, iseCurrenciesOpen } = this.context;

    return (
      <div>
        <Header symbol={this.props.symbol} />
        {iseCurrenciesOpen && <Currencies />}
        {isCartOpen && <CartBag />}
        <Routes />
      </div>
    );
  }
}

export default Page;
