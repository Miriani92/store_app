import React, { Component } from "react";
import styles from "./Attributes.module.css";
import Item from "./Item";

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
              {attr.items.map((item, ind) => {
                return <Item key={ind} item={item} attr={attr} />;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Attributes;
