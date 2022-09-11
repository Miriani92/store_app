export const findDuplicateAttribute = (cartProducts, addedProductAttr) => {
  if (cartProducts.length === 0) return false;
  let isDuplicate = false;

  for (const product of cartProducts) {
    if (
      JSON.stringify(addedProductAttr) ===
      JSON.stringify(product.chosenAttribute)
    ) {
      return (isDuplicate = true);
    }
  }

  return isDuplicate;
};
