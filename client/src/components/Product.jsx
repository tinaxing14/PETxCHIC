import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductDetail from "./ProductDetail";
import ImageSlider from "./utils/ImageSlider.jsx";

//antd library imports
import "antd/dist/antd.css";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { Col, Card, Row, Avatar } from "antd";
const { Meta } = Card;

const Product = ({ setCartNumber, cartNumber }) => {
  //react hooks
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(parseInt(0));
  const [dataSize, setDataSize] = useState(parseInt(9));
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const loadProducts = (skip) => {
    axios
      .get(`/api/products/${skip}`)
      .then((response) => {
        setDataSize(response.data.length);
        setProducts([...products, ...response.data]);
      })
      .catch((err) => {
        console.log("failed to fetch data", err);
      });
  };

  const loadMore = () => {
    loadProducts(skip);
    setSkip(skip + 9);
  };

  const handleProductDetail = (product) => {
    setShowProductDetail(true);
    setCurrentProduct(product);
  };

  //same as componentdidmount - gave an additional [] to prevent infinite loops
  useEffect(() => {
    loadProducts(skip);
    setSkip(skip + 9);
  }, []);

  const renderCards = products.map((product, index) => {
    // dog or cat avatar for product card
    let avatar;
    if (product.category === "cat") {
      avatar = (
        <Avatar size="large" src="https://petfashion.s3.us-east-2.amazonaws.com/Screen Shot 2020-06-05 at 9.37.32 PM.png" />
      );
    } else if (product.category === "dog") {
      avatar = (
        <Avatar size="large" src="https://petfashion.s3.us-east-2.amazonaws.com/Screen Shot 2020-06-05 at 9.37.36 PM.png" />
      );
    }
    return (
      <Col key={index} lg={8} md={12} xs={24}>
        <Card
          className='card'
          onClick={() => {
            handleProductDetail(product);
          }}
          key={index}
          hoverable={true}
          cover={<ImageSlider images={product.images.slice(0,3)} autoplay={false} classname='product_imageSlider' dots={false} />}
          actions={[<ShoppingCartOutlined />, <HeartOutlined />]}
        >
          <Meta
            avatar={avatar}
            title={product.name}
            style={{ height: "30px", cursor: "pointer" }}
            description={`$${product.price}`}
          />
        </Card>
      </Col>
    );
  });
  
  return (
    <div className="product_container">
      <div className="product__title">Featured Products<a id='featureproducts'></a></div>
      <div className="product__meetmodels">
        Meet Our Models
        <br/>
        <Avatar size={80} onClick={} src="https://petfashion.s3.us-east-2.amazonaws.com/Screen Shot 2020-06-05 at 9.37.32 PM.png" />
      <Avatar size={80} onClick={} src="https://petfashion.s3.us-east-2.amazonaws.com/Screen Shot 2020-06-05 at 9.37.36 PM.png" />
        </div>
      <Row gutter={[15, 15]}>{renderCards}</Row>
      <div>
        {showProductDetail ? <ProductDetail product={currentProduct} setShowProductDetail={setShowProductDetail} setCartNumber={setCartNumber} cartNumber={cartNumber}/> : null}
      </div>
      <div>
        {dataSize === 9 ? <button className='product__btn' onClick={loadMore}>Load More</button> : null}
      </div>
    </div>
  );
};

export default Product;
