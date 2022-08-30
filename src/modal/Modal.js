import React, { Component } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { CartContext } from "../context/cartcontext/Cart-actions";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  static contextType = CartContext;

  render() {
    const taggleCart = this.context.taggleCart;

    return ReactDOM.createPortal(
      <React.Fragment>
        <div className={styles.background} onClick={taggleCart}></div>
        <div>{this.props.children}</div>
      </React.Fragment>,
      modalRoot
    );
  }
}

export default Modal;
