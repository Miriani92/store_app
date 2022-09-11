export const findProductIndex = (products, product) => {
  const { chosenAttribute } = product;
  let indexOfProduct;
  for (let i = 0; i < products.length; i++) {
    const isMatch =
      JSON.stringify(chosenAttribute) ===
      JSON.stringify(products[i].chosenAttribute);

    if (isMatch) {
      return (indexOfProduct = i);
    }
  }
  return indexOfProduct;
};
