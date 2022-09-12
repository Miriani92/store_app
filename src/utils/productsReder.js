export default (products, category) => {
  if (category === "all" || !category) return products;
  return products.filter((item) => item.category === category);
};
