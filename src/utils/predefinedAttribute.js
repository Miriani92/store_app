export const predefineAttribute = (productId, attribute) => {
  let attr = {};
  for (let i = 0; i < attribute.length; i++) {
    attr = { ...attr, [i]: attribute[i].items[0].value };
  }
  return { [productId]: { ...attr } };
};
