import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";
import axios from "axios";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };

    getProducts();
  }, []);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => {
          return <ProductItem key={product.id} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
