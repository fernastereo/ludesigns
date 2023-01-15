import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <nav>
      <img src="./icons/icon_menu.svg" className="menu" alt="menu" />

      <div className="navbar-left">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <ul>
          <li>
            <a href="">All</a>
          </li>
          <li>
            <a href="">Clothes</a>
          </li>
          <li>
            <a href="">Electronics</a>
          </li>
          <li>
            <a href="">Furniture</a>
          </li>
          <li>
            <a href="">Toys</a>
          </li>
          <li>
            <a href="">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email">mail@example.com</li>
          <li className="navbar-shopping-cart">
            <img src="./icons/icon_shopping_cart.svg" alt="" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
