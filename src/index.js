import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/apolloClient";
import { CartContextProvider } from "./context/cartcontext/Cart-actions";
import { SingleProductProvider } from "./context/singleproductcontext/single-product-context";
import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.render(
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <CartContextProvider>
        <SingleProductProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SingleProductProvider>
      </CartContextProvider>
    </ApolloProvider>
  </ErrorBoundary>,
  document.getElementById("root")
);
