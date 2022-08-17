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
  const [choseCurrencySymbol, setChoseCurrencySymbol] = useState("$");

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
      return setSingleProduct([...copiedList]);
    }

    setSingleProduct(() => {
      return [...singleProduct, { ...product, value: 1 }];
    });

    setTotalQuantity(totalQuantity + 1);
  };

  const changeCurrencyOption = (value) => {
    const ind = parseInt(value);
    setChosenCurrencyInd(ind);
    const symbol = currencies.currencies[ind].symbol;
    localStorage.setItem("symbol", symbol);

    setChoseCurrencySymbol(localStorage.getItem("symbol"));
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
    }
    if (action === "minus") {
      if (updatedSIngeleProduct[productIndex].value === 1) {
        const updatedSingle = updatedSIngeleProduct.filter(
          (item) => item.id !== updatedSIngeleProduct[productIndex].id
        );

        return setSingleProduct([...updatedSingle]);
      }
      updatedSIngeleProduct[productIndex].value =
        updatedSIngeleProduct[productIndex].value - 1;
    }

    setSingleProduct([...updatedSIngeleProduct]);
  };
  useEffect(() => {
    const totalPrice = singleProduct.reduce((total, item) => {
      return total + item.prices[chosenCurrencyInd].amount * item.value;
    }, 0);
    setTotalPrice(totalPrice);
  }, [singleProduct, chosenCurrencyInd]);

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
        choseCurrencySymbol,
      }}
    >
      {children}
    </SingleProductContext.Provider>
  );
};

export default SingleProductContext;
