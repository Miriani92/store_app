import React, { Component } from "react";

class ChoseCurrency extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   amount: "",
    //   symbol: "",
    // };
  }

  // componentDidMount() {
  //   const { symbol, amount } = this.props;
  //   if (symbol === "default" || amount === "defalut") return;
  //   this.setState({ amount: amount, symbol: symbol });
  // }
  render() {
    return (
      <>
        <span>{this.props.symbol}</span>
        <span>{this.props.amount}</span>
      </>
    );
  }
}

// ChoseCurrency.defaultProps = {
//   cityList: this.props.symbol,
//   provinceList: this.props.amount,
// };

export default ChoseCurrency;
