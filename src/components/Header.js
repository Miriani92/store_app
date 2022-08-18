import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { BsCart } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";
import logo from "../assets/logo.png";
import Currencies from "./Currencies";
import { CartContext } from "../context/cartcontext/Cart-actions";

class Header extends Component {
  static contextType = CartContext;

  constructor(props) {
    super(props);
  }
  render() {
    const { taggleCart, iseCurrenciesOpen, togglecurrencies } = this.context;

    return (
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName={styles.active}>
              ALL
            </NavLink>
          </li>
          <li>
            <NavLink to="/clothes" activeClassName={styles.active}>
              CLOTHES
            </NavLink>
          </li>
          <li>
            <NavLink to="/tech" activeClassName={styles.active}>
              TECH
            </NavLink>
          </li>
        </ul>
        <img src={logo} className={styles.logo} />
        <div className={styles.cartsection}>
          <div>
            <span>{this.props.symbol}</span>
            <button className={styles.arrowbutton} onClick={togglecurrencies}>
              <MdKeyboardArrowUp />
            </button>
            {iseCurrenciesOpen && (
              <Currencies changeCurrency={togglecurrencies} />
            )}
          </div>
          <div>
            <button className={styles.cartButton} onClick={() => taggleCart()}>
              <BsCart />
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
