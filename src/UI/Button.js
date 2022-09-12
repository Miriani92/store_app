import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const viewBag = this.props.text === "VIEW BAG";
    return (
      <Link
        style={this.props.style && this.props.style}
        className={styles.button}
        to={viewBag ? "/cart" : null}
      >
        {this.props.text}
      </Link>
    );
  }
}

export default Button;
