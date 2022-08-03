import { TOGGLE_CART } from "./Cart-action-constats";
import { CartContextCreator } from "./Cart-context";

const defaultState = { isCartOpen: false };

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    // case Get_SINGLE_PRODUCT:
    //   const products = data.category.products;
    //   console.log(state);
    //   return {
    //     ...state,
    //     singleProduct: products.find(
    //       (product) => product.id === action.payload
    //     ),
    //   };

    default:
      return { ...state };
  }
};

const taggleCart = (dispatch) => {
  return () => {
    dispatch({ type: TOGGLE_CART });
  };
};

// const getSingleProduct = (dispatch) => {
//   return (id) => {
//     dispatch({ type: Get_SINGLE_PRODUCT, payload: id });
//   };
// };

export const { CartContextProvider, CartContext } = CartContextCreator(
  reducer,
  { taggleCart },
  defaultState
);
