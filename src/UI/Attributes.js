import React, { Component } from "react";
import styles from "./Attributes.module.css";

class Attributes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.attributes.length === 0) return null;
    return (
      <div>
        {this.props.attributes.map((attr, index) => {
          const { name } = attr;
          return (
            <div key={index}>
              <h1>{name}</h1>
              {attr.items.map((item) => {
                return (
                  <button
                    key={item.id}
                    className={styles.button}
                    style={{
                      backgroundColor:
                        attr.type === "swatch" && `${item.value}`,
                    }}
                  >
                    {attr.type !== "swatch" && item.value}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Attributes;
