import React, { Component } from "react";
import styles from "./Cart-bag.module.css";
import Loading from "../Loading";
import Modal from "../../modal/Modal";
import SingleProductContext from "../../context/singleproductcontext/single-product-context";
import SingleCartItem from "./SingleCartItem";

class CartBag extends Component {
  static contextType = SingleProductContext;

  constructor(props) {
    super(props);
    this.state = {
      cuantity: this.props.value,
    };
  }
  render() {
    if (this.context.loading) {
      return <Loading />;
    }
    const { singleProduct, totalQuantity, totalPrice, choseCurrencySymbol } =
      this.context;
    return (
      <Modal>
        <div className={styles.carbag}>
          {singleProduct.map((product) => {
            return (
              <SingleCartItem {...product} key={product.id} cartBag="cartBag" />
            );
          })}

          <h3>{totalQuantity}</h3>
          <h4> {choseCurrencySymbol + totalPrice}</h4>
        </div>
      </Modal>
    );
  }
}

export default CartBag;
