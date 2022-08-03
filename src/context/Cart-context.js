import React, { createContext, useReducer, useEffect } from "react";
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
    useEffect(() => {}, []);
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
