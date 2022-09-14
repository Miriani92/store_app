import React, { Component } from "react";
import ProductCard from "./ProdactCard";
import styles from "./Products.module.css";
import Loading from "./Loading";
import SingleProductContext from "../context/singleproductcontext/single-product-context";
import renderBasedCategory from "../utils/productsReder";
class Products extends Component {
  static contextType = SingleProductContext;

  render() {
    if (this.context.loading) return <Loading />;
    const products = renderBasedCategory(
      this.context.data.category.products,
      this.props.categoryName
    );

    return (
      <React.Fragment>
        <h2 className={styles.category}>{this.props.categoryName}</h2>
        <div className={styles.productswrapper}>
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                {...product}
                categoryName={this.props.categoryName}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
