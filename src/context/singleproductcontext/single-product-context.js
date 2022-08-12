import React, { useState, createContext, useEffect } from "react";
import useQueryProduct from "../../hooks/useQueryProduct";
import useCurrencies from "../../hooks/useCurrencies";

const SingleProductContext = createContext();

export const SingleProductProvider = ({ children }) => {
  const { loading, error, data } = useQueryProduct();
  const { currencies } = useCurrencies();
  const [singleProduct, setSingleProduct] = useState([]);
  const [chosenCurrencyInd, setChosenCurrencyInd] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
      setTotalQuantity(totalQuantity + 1);
      setTotalPrice(
        (prevPrice) =>
          prevPrice +
          copiedList[matchedProductIndex].prices[chosenCurrencyInd].amount
      );
      return setSingleProduct([...copiedList]);
    }

    setSingleProduct(() => {
      return [...singleProduct, { ...product, value: 1 }];
    });
    setTotalPrice(
      (prevPrice) => prevPrice + product.prices[chosenCurrencyInd].amount
    );
    setTotalQuantity(totalQuantity + 1);
  };

  const changeCurrencyOption = (ind) => {
    setChosenCurrencyInd(ind);
  };

  const countTotalProducts = (action) => {
    if (action === "plus") {
      setTotalQuantity((total) => total + 1);
    }

    if (action === "minus") {
      setTotalQuantity((total) => total - 1);
    }
  };
  const changeQuantity = (id, action) => {
    const updatedSIngeleProduct = [...singleProduct];

    const productIndex = updatedSIngeleProduct.findIndex(
      (product) => product.id === id
    );
    if (action === "plus") {
      updatedSIngeleProduct[productIndex].value =
        updatedSIngeleProduct[productIndex].value + 1;
      setTotalPrice(
        (prev) =>
          prev +
          updatedSIngeleProduct[productIndex].prices[chosenCurrencyInd].amount
      );
    }
    if (action === "minus") {
      updatedSIngeleProduct[productIndex].value =
        updatedSIngeleProduct[productIndex].value - 1;
      setTotalPrice(
        (prev) =>
          prev -
          updatedSIngeleProduct[productIndex].prices[chosenCurrencyInd].amount
      );
    }

    setSingleProduct([...updatedSIngeleProduct]);
  };

  return (
    <SingleProductContext.Provider
      value={{
        data,
        loading,
        error,
        addToCart,
        singleProduct,
        currencies,
        changeCurrencyOption,
        chosenCurrencyInd,
        countTotalProducts,
        totalQuantity,
        changeQuantity,
        totalPrice,
        // countTotalPrice,
      }}
    >
      {children}
    </SingleProductContext.Provider>
  );
};

export default SingleProductContext;
