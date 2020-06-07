import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetail from "./ProductDetail";
import ImageSlider from "./utils/ImageSlider.jsx";

//antd library imports
import "antd/dist/antd.css";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { Col, Card, Row, Avatar } from "antd";
const { Meta } = Card;

const Product = () => {
  //react hooks
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(parseInt(0));
  const [dataSize, setDataSize] = useState(parseInt(8));
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const loadProducts = (skip) => {
    axios
      .get(`/api/products/${skip}`)
      .then((response) => {
        console.log(response.data);
        setDataSize(response.data.length);
        setProducts([...products, ...response.data]);
      })
      .catch((err) => {
        console.log("failed to fetch data", err);
      });
  };

  const loadMore = () => {
    loadProducts(skip);
    setSkip(skip + 8);
  };

  const handleProductDetail = (product) => {
    setShowProductDetail(true);
    setCurrentProduct(product);
  };

  //same as componentdidmount - gave an additional [] to prevent infinite loops
  useEffect(() => {
    loadProducts(skip);
    setSkip(skip + 8);
  }, []);

  const renderCards = products.map((product, index) => {
    // dog or cat avatar for product card
    let avatar;
    if (product.category === "cat") {
      avatar = (
        <Avatar src="https://petfashion.s3.us-east-2.amazonaws.com/Screen Shot 2020-06-05 at 9.37.32 PM.png" />
      );
    } else if (product.category === "dog") {
      avatar = (
        <Avatar src="https://petfashion.s3.us-east-2.amazonaws.com/Screen Shot 2020-06-05 at 9.37.36 PM.png" />
      );
    }
    return (
      <Col lg={8} md={12} xs={24}>
        <Card
          className='card'
          onClick={() => {
            handleProductDetail(product);
          }}
          key={index}
          hoverable={true}
          cover={<ImageSlider images={product.images.slice(0,3)} autoplay={false} classname='product_imageSlider' />}
          actions={[<ShoppingCartOutlined />, <HeartOutlined />]}
        >
          <Meta
            avatar={avatar}
            title={product.name}
            style={{ height: "30px" }}
            description={`$${product.price}`}
          />
        </Card>
      </Col>
    );
  });
  
  return (
    <div className="product_container">
      <Row gutter={[15, 15]}>{renderCards}</Row>
      <div>
        {showProductDetail ? <ProductDetail product={currentProduct}/> : null}
      </div>
      <div>
        {dataSize === 8 ? <button onClick={loadMore}>Load More</button> : null}
      </div>
    </div>
  );
};

export default Product;
