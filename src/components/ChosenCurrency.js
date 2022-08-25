import React, { Component } from "react";

class ChoseCurrency extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <span>{this.props.symbol}</span>
        <span>{this.props.amount}</span>
      </>
    );
  }
}

export default ChoseCurrency;
