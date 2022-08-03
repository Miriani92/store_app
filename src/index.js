import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/apolloClient";
import { CartContextProvider } from "./context/cartcontext/Cart-actions";
import { SingleProductProvider } from "./context/singleproductcontext/single-product-context";

ReactDOM.render(
  <ApolloProvider client={client}>
    <CartContextProvider>
      <SingleProductProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SingleProductProvider>
    </CartContextProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
