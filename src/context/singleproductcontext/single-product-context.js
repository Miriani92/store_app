import React, { useState, createContext, useEffect } from "react";
import useQueryProduct from "../../hooks/useQueryProduct";
import useCurrencies from "../../hooks/useCurrencies";
import { predefineAttribute } from "../../utils/predefinedAttribute";
import { findDuplicateAttribute } from "../../utils/findeDuplicateAttribute";
import { findProductIndex } from "../../utils/findProductIndex";

const SingleProductContext = createContext();

export const SingleProductProvider = ({ children }) => {
  const { loading, error, data } = useQueryProduct();
  const { currencies } = useCurrencies();
  const [singleProduct, setSingleProduct] = useState([]);
  const [chosenCurrencyInd, setChosenCurrencyInd] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [choseCurrencySymbol, setChoseCurrencySymbol] = useState("$");
  const [singleProductAttr, setSingleProductAttr] = useState({});

  const addToCart = (id, component = "") => {
    const product = data.category.products.find((product) => product.id === id);

    let attributes;
    if (component === "productCard") {
      attributes = predefineAttribute(id, product.attributes);
    } else {
      attributes = singleProductAttr;
    }

    const matchedProductIndex = singleProduct.findIndex(
      (item) => item.id === id
    );
    const isDuplicatedAttr = findDuplicateAttribute(singleProduct, attributes);

    if (matchedProductIndex !== -1 && isDuplicatedAttr) {
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
      return [
        ...singleProduct,
        { ...product, value: 1, chosenAttribute: { ...attributes } },
      ];
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
  const changeQuantity = (product, action) => {
    const updatedSIngeleProduct = [...singleProduct];

    const productIndex = findProductIndex(updatedSIngeleProduct, product);
    if (action === "plus") {
      updatedSIngeleProduct[productIndex].value =
        updatedSIngeleProduct[productIndex].value + 1;
    }
    if (action === "minus") {
      if (updatedSIngeleProduct[productIndex].value === 1) {
        updatedSIngeleProduct.splice(productIndex, 1);

        return setSingleProduct([...updatedSIngeleProduct]);
      }
      updatedSIngeleProduct[productIndex].value =
        updatedSIngeleProduct[productIndex].value - 1;
    }

    setSingleProduct([...updatedSIngeleProduct]);
  };

  const addSingleProductAttr = (selectedAttr) => {
    setSingleProductAttr(selectedAttr);
  };
  const changeAttribute = (index, attribute, productId) => {
    setSingleProductAttr((prevAttribute) => {
      return {
        ...prevAttribute,
        [productId]: { ...prevAttribute[productId], [index]: attribute },
      };
    });
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
        addSingleProductAttr,
        changeAttribute,
        singleProductAttr,
      }}
    >
      {children}
    </SingleProductContext.Provider>
  );
};

export default SingleProductContext;
