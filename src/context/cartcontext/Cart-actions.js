import { TOGGLE_CART } from "./Cart-action-constats";
import { CartContextCreator } from "./Cart-context";
import { TOGGLE_CURRENCIES } from "./Cart-action-constats";

const defaultState = { isCartOpen: false, iseCurrenciesOpen: false };

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
        iseCurrenciesOpen: state.iseCurrenciesOpen && !state.iseCurrenciesOpen,
      };
    case TOGGLE_CURRENCIES:
      return {
        ...state,
        iseCurrenciesOpen: !state.iseCurrenciesOpen,
        isCartOpen: state.isCartOpen && !state.isCartOpen,
      };
    default:
      return { ...state };
  }
};

const taggleCart = (dispatch) => {
  return () => {
    dispatch({ type: TOGGLE_CART });
  };
};

const togglecurrencies = (dispatch) => {
  return () => {
    dispatch({ type: TOGGLE_CURRENCIES });
  };
};

export const { CartContextProvider, CartContext } = CartContextCreator(
  reducer,
  { taggleCart, togglecurrencies },
  defaultState
);
