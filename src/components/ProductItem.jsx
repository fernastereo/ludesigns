import React from "react";
import "../styles/ProductItem.scss";

const ProductItem = () => {
  return (
    <div className="ProductItem">
      <img
        src="https://images.pexels.com/photos/3573555/pexels-photo-3573555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="product-info">
        <div>
          <p>$20,00</p>
          <p>Design # 025</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
