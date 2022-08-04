import React, { Component } from "react";
import styles from "./SingleCartItem.module.css";
import Size from "../../UI/Size";
// import Colors from "../../UI/Colors";
import Gallery from "../Gallery";

class SingleCartItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className={styles.cartitem}>
        <div>
          <h1>{this.props.name}</h1>
          <h1>{this.props.category}</h1>
          <p>$50</p>
          <Size attributes={this.props.attributes} />
        </div>
        <div>
          <div className={styles.buttonswrapper}>
            <div className={styles.buttons}>
              <button className={styles.plusbtn}>+</button>
              <div>
                <h3 className={styles.quantity}>1</h3>
              </div>
              <button className={styles.minusbtn}>-</button>
            </div>
            <Gallery gallery={this.props.gallery} />
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCartItem;
