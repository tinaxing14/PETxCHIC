import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { Icon, Col, Card, Row } from 'antd';

const Product = () => {
  //react hooks
  const [products, setProducts] = useState([]);

  //same as componentdidmount
  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log("failed to fetch data", err);
      });
  });
  return (
    <div>
      <div>
      </div>
      <ProductCard products={products} />
    </div>
  );
};

export default Product;
