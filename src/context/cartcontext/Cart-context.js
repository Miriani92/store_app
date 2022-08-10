import React, { createContext, useReducer, useEffect } from "react";

export const CartContextCreator = (reducer, actions, defaultState) => {
  const CartContext = createContext();

  const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    let boundActions = {};

    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    useEffect(() => {}, []);
    return (
      <CartContext.Provider value={{ ...state, ...boundActions }}>
        {children}
      </CartContext.Provider>
    );
  };
  return { CartContextProvider, CartContext };
};
