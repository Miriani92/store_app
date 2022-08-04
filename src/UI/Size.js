import React, { Component } from "react";
import styles from "./Size.module.css";

class Size extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.attributes);
  }
  render() {
    const { name, items } = this.props.attributes[0];
    console.log(items);
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
