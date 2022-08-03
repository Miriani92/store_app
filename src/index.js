import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/apolloClient";
import { CartContextProvider } from "./context/cartcontext/Cart-actions";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <ApolloProvider client={client}>
//     <CartContextProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </CartContextProvider>
//   </ApolloProvider>
// );
ReactDOM.render(
  <ApolloProvider client={client}>
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
