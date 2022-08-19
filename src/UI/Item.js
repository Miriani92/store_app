import React, { Component } from "react";
import styles from "./Item.module.css";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: localStorage.getItem(this.props.item.value)
        ? localStorage.getItem(this.props.item.value)
        : "no",
    };
  }
  chooseAttribute() {
    if (localStorage.getItem(this.props.item.value) === "yes") {
      localStorage.removeItem(this.props.item.value);
    } else {
      localStorage.setItem(this.props.item.value, "yes");
    }
    this.setState({
      addClass: localStorage.getItem(this.props.item.value),
    });
  }
  render() {
    return (
      <button
        key={this.props.item.id}
        className={
          this.state.addClass === "yes"
            ? `${styles.button} ${styles.add}`
            : styles.button
        }
        onClick={() => this.chooseAttribute()}
        style={{
          backgroundColor:
            this.props.attr.type === "swatch" && `${this.props.item.value}`,
        }}
      >
        {this.props.attr.type !== "swatch" && this.props.item.value}
      </button>
    );
  }
}

export default Item;
