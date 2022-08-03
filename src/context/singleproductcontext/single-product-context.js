import React, { useState, createContext, useEffect } from "react";
import useQueryProduct from "../../hooks/useQueryProduct";

const SingleProductContext = createContext();

export const SingleProductProvider = ({ children }) => {
  const { loading, error, data } = useQueryProduct();
  //   const [singleProduct, setSingleProduct] = useState({});
  //   useEffect(() => {
  //     setSingleProduct({ data, loading, error });
  //   }, []);
  //   console.log(singleProduct);

  console.log(data);
  return (
    <SingleProductContext.Provider value={"miriani"}>
      {children}
    </SingleProductContext.Provider>
  );
};

export default SingleProductContext;
