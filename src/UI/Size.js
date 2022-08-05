import React, { Component } from "react";
import styles from "./Size.module.css";

class Size extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.attributes[0]) return <div></div>;
    const { name, items } = this.props.attributes[0];
    return (
      <div>
        <h1>{name}</h1>
        {items.map((item) => {
          return (
            <button key={item.id} className={styles.button}>
              {item.value}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Size;
