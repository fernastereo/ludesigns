import React from "react";
import "../styles/OrderItem.scss";
import close from "@icons/icon_close.png";

const OrderItem = () => {
  return (
    <div className="OrderItem">
      <figure>
        <img
          src="https://images.pexels.com/photos/3573555/pexels-photo-3573555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="bike"
        />
      </figure>
      <p>Design # 211</p>
      <p>$30,00</p>
      <img src={close} alt="close" />
    </div>
  );
};

export default OrderItem;
