import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { BsCart } from "react-icons/bs";
import { MdKeyboardArrowUp } from "react-icons/md";
import logo from "../assets/logo.svg";
import Currencies from "./Currencies";
import { CartContext } from "../context/cartcontext/Cart-actions";

class Header extends Component {
  static contextType = CartContext;

  render() {
    const { taggleCart, iseCurrenciesOpen, togglecurrencies } = this.context;
    return (
      <nav className={styles.nav}>
        <ul>
          {this.props.categories.map((category, index) => {
            return (
              <li key={category.name}>
                <NavLink
                  to={`/${category.name}`}
                  activeClassName={styles.active}
                >
                  {category.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <img src={logo} className={styles.logo} alt="logo" />
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
          <button className={styles.cartButton} onClick={() => taggleCart()}>
            <BsCart />
            <div>{this.props.totalItems}</div>
          </button>
        </div>
      </nav>
    );
  }
}

export default Header;
