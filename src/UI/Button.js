import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import { CartContext } from "../context/cartcontext/Cart-actions";

class Button extends Component {
  static contextType = CartContext;
  constructor(props) {
    super(props);
  }
  render() {
    const viewBag = this.props.text === "VIEW BAG";
    const { taggleCart } = this.context;
    return (
      <Link
        style={this.props.style && this.props.style}
        className={styles.button}
        to={viewBag ? "/cart" : "/"}
        onClick={taggleCart}
      >
        {this.props.text}
      </Link>
    );
  }
}

export default Button;
