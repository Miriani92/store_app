export default (products, category) => {
  if (category === "all") {
    return products;
  } else {
    return products.filter((item) => item.category === category);
  }
};
