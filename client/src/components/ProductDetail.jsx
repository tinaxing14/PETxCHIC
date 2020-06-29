/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ImageSlider from './utils/ImageSlider.jsx';
import axios from 'axios';
import { FullscreenExitOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';

const ProductDetail = ({product, setShowProductDetail, setCartNumber, cartNumber}) => {
  //reverse image array to show the cloth front/back first
  const [size, setSize] = useState('xs');
  const images = product.images.reverse();
  const [spinner, setSpinner] = useState(false);
  const [sucess, setSucces] = useState('');
  const addToCart = (id, size, price, image, name) => {
    setSucces('');
    setSpinner(true);
    setCartNumber(cartNumber + 1)
    axios.post(`/api/products/addtocart?id=${id}&size=${size}&price=${price}&image=${image}&name=${name}`)
      .then((response)=>{
        console.log(response);
        setTimeout(() =>{        
          setSpinner(false);
          setSucces('Added!')}, 1000)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  return (
    <div className='productdetail__black'>
  <div className='productdetail_container'>
    <div className='productdetail_image'>
    <ImageSlider images={images} autoplay={true} classname='productdetail_imageSlider' dots={true}/>
    </div>
    <div className='product_info'>
      <div className='productdetail__exitbtn' onClick={()=> { setShowProductDetail(false)}}>
        <FullscreenExitOutlined style={{fontSize: '40px', color: 'black', cursor:"pointer"}} />
      </div>
      <div className="productdetail__title">{product.name}</div>
      <div className="productdetail__price">{`$${product.price}`}</div>
      <div className="productdetail__description">{product.description}</div>
      <div className="productdetail__size__container">{product.sizes.map((size, index) => {
        return (
          <div className="productdetail__size" key={index} onClick={()=>{setSize(size)}}>{size}</div>
        )
      })}</div>
      <div className='productdetail__size__selected'>Selected Size: {size}</div>
      <div calssName='btn__container'>
      <div><button className="productdetail__btn" onClick={() => {addToCart(product.id, size, product.price, product.images[0], product.name)}}>Add to Cart</button></div>
    <div className='spinner__container'>{spinner ? <div className="success__spinner"></div>: null}{sucess}</div>
      </div>
    </div>
  </div>
  </div>
)
}

export default ProductDetail;