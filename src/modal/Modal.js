import React, { Component } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className={styles.background}></div>
        <div className={styles.overlay}>{this.props.children}</div>
      </React.Fragment>,
      modalRoot
    );
  }
}

export default Modal;
