import React, { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";
import axios from "axios";
import { Icon, Col, Card, Row, Avatar } from "antd";
const { Meta } = Card;
import "antd/dist/antd.css";
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import ImageSlider from './utils/ImageSlider.jsx'

const Product = () => {
  //react hooks
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);

  const loadProducts = (skip) => {
    axios
    .get(`/api/products/${skip}`)
    .then((response) => {
      console.log(response.data);
      setProducts(response.data);
    })
    .catch((err) => {
      console.log("failed to fetch data", err);
    });
  };

  const loadMore = () => {
    let skip = skip + 8;
    loadProducts(skip)
  }

  //same as componentdidmount
  useEffect(() => {
    loadProducts(skip);
    setSkip(skip + 8)
  }, []);

  const renderCards = products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24}>
        <Card
          hoverable={true}
          style={{width:'300px'}}
          cover={<ImageSlider images={product.images}/>}
          actions={[
            <ShoppingCartOutlined />,
            <HeartOutlined />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={product.name}
            description={`$${product.price}`}
          />
        </Card>
      </Col>
    );
  });
  return (
    <div style={{maxWidth:"1400px", display:'center'}}>
      <Row gutter={[15, 15]}>{renderCards}</Row>
      <button onClick={loadMore}>Load More</button>
    </div>

  );
};

export default Product;
