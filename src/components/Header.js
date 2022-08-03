import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { BsCurrencyDollar, BsCart } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "../assets/logo.png";
import { CartContext } from "../context/cartcontext/Cart-actions";

class Header extends Component {
  static contextType = CartContext;
  render() {
    const { taggleCart } = this.context;

    return (
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link
              to="/"
              // className={({ isActive }) =>
              //   isActive ? styles.active : undefined
              // }
            >
              ALL
            </Link>
          </li>
          <li>
            <Link
              to="/clothes"
              // className={({ isActive }) =>
              //   isActive ? styles.active : undefined
              // }
            >
              CLOTHES
            </Link>
          </li>
          <li>
            <Link
              to="/tech"
              // className={({ isActive }) =>
              //   isActive ? styles.active : undefined
              // }
            >
              TECH
            </Link>
          </li>
        </ul>
        <img src={logo} className={styles.logo} />
        <div className={styles.cartsection}>
          <div>
            <BsCurrencyDollar />
          </div>
          <div>
            <button className={styles.arrowbutton}>
              <MdKeyboardArrowDown />
            </button>
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
