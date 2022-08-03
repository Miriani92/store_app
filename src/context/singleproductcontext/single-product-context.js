import React, { useState, createContext, useEffect } from "react";
import useQueryProduct from "../../hooks/useQueryProduct";

const SingleProductContext = createContext();

export const SingleProductProvider = ({ children }) => {
  const { loading, error, data } = useQueryProduct();
  const [singleProduct, setSingleProduct] = useState([]);

  const addToCart = (id) => {
    const product = data.category.products.find((product) => product.id === id);
    setSingleProduct(() => {
      return { product };
    });
  };

  return (
    <SingleProductContext.Provider
      value={{ data, loading, error, addToCart, singleProduct }}
    >
      {children}
    </SingleProductContext.Provider>
  );
};

export default SingleProductContext;
