import React, { createContext, useReducer } from "react";
import useQueryProduct from "../hooks/useQueryProduct";

export const CartContextCreator = (reducer, actions, defaultState) => {
  const CartContext = createContext();

  const CartContextProvider = ({ children }) => {
    const { loading, error, data } = useQueryProduct();

    const [state, dispatch] = useReducer(reducer, defaultState);

    let boundActions = {};

    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <CartContext.Provider
        value={{ ...state, ...boundActions, loading, error, data }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  return { CartContextProvider, CartContext };
};
