import React, { useState, createContext, useEffect } from "react";
import useQueryProduct from "../../hooks/useQueryProduct";

const SingleProductContext = createContext();

export const SingleProductProvider = ({ children }) => {
  const { loading, error, data } = useQueryProduct();
  const [singleProduct, setSingleProduct] = useState([]);

  const addToCart = (id) => {
    const product = data.category.products.find((product) => product.id === id);
    const matchedProductIndex = singleProduct.findIndex(
      (item) => item.id === id
    );

    if (matchedProductIndex !== -1) {
      const copiedList = [...singleProduct];
      const doubledProduct = copiedList[matchedProductIndex];
      copiedList[matchedProductIndex] = {
        ...doubledProduct,
        value: doubledProduct.value + 1,
      };
      return setSingleProduct([...copiedList]);
    }

    setSingleProduct(() => {
      console.log();
      return [...singleProduct, { ...product, value: 1 }];
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
