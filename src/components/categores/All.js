import React, { Component } from "react";
import Products from "../Products";
// import { GET_ALL_PRODUCTS } from "../../api/query";
// import { Query } from "@apollo/client/react/components";

class All extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        {/* <Query query={GET_ALL_PRODUCTS}>
          {({ loading, data, error }) => { */}
        <Products />;
        {/* }}
        </Query> */}
      </main>
    );
  }
}

export default All;
