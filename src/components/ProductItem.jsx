import React, { useState } from "react";
import "../styles/ProductItem.scss";
import addToCart from "@icons/bt_add_to_cart.svg";

const ProductItem = () => {
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart([]);
  };

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
        <figure onClick={handleClick}>
          <img src={addToCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
