import React, { Component } from "react";
import styles from "./Button.module.css";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        style={this.props.style && this.props.style}
        className={styles.button}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
