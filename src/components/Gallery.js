import React, { Component } from "react";
import styles from "./Gallery.module.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  slider(direction) {
    if (direction === "next") {
      if (this.props.gallery.length - 1 === this.state.index) {
        this.setState({ index: 0 });
      } else {
        this.setState({ index: this.state.index + 1 });
      }
    } else {
      if (this.state.index === 0) {
        this.setState({ index: this.props.gallery.length - 1 });
      } else {
        this.setState({ index: this.state.index - 1 });
      }
    }
  }

  render() {
    return (
      <div className={styles.gallery}>
        <div className={styles.buttonwrapper}>
          <button onClick={() => this.slider("prev")}>
            <MdNavigateBefore />
          </button>
          <button onClick={() => this.slider("next")}>
            <MdNavigateNext />
          </button>
        </div>
        <img
          src={this.props.gallery[this.state.index]}
          className={styles.image}
        ></img>
      </div>
    );
  }
}

export default Gallery;
