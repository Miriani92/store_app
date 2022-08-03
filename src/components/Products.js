import React, { Component } from "react";
import ProductCard from "./ProdactCard";
import styles from "./Products.module.css";
import Loading from "./Loading";
import SingleProductContext from "../context/singleproductcontext/single-product-context";
class Products extends Component {
  static contextType = SingleProductContext;
  constructor(props) {
    super(props);
  }

  render() {
    if (this.context.loading) return <Loading />;
    const products = this.context.data.category.products;
    return (
      <div className={styles.productswrapper}>
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    );
  }
}

export default Products;
