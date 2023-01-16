import React from "react";
import "../styles/ProductInfo.scss";
import addToCart from "@icons/bt_add_to_cart.svg";

const ProductInfo = () => {
  return (
    <>
      <img
        src="https://images.pexels.com/photos/3573555/pexels-photo-3573555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="bike"
      />
      <div className="ProductInfo">
        <p>$35,00</p>
        <p>Design # 082</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae
          accusantium magni velit, aliquid ad? Impedit nihil alias fugiat, sed
          laudantium, beatae numquam laboriosam debitis quod in similique
          nostrum molestiae?
        </p>
        <button className="primary-button add-to-cart-button">
          <img src={addToCart} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
