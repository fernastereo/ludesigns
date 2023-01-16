import React from "react";
import "../styles/ShoppingCartItem.scss";

const ShoppingCartItem = () => {
  return (
    <div className="ShoppingCartItem">
      <figure>
        <img
          src="https://images.pexels.com/photos/3573555/pexels-photo-3573555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="bike"
        />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
    </div>
  );
};

export default ShoppingCartItem;
