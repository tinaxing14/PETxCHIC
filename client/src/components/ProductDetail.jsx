import React, { useState, useEffect } from "react";
import ImageSlider from './utils/ImageSlider.jsx';
import axios from 'axios';

const ProductDetail = ({product}) => {
  //reverse image array to show the cloth front/back first
  const [size, setSize] = useState('xs')
  const images = product.images.reverse();
  const addToCart = (id, size) => {
    axios.post(`/api/products/addtocart?id=${id}&size=${size}`)
      .then((response)=>{
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (<div className='productdetail_container'>
    <div className='productdetail_image'>
    <ImageSlider images={images} autoplay={true} classname='productdetail_imageSlider'/>
    </div>
    <div className='product_info'>
      <div>header</div>
      <div>{product.price}</div>
      <div>{product.description}</div>
      <div>{product.sizes.map((size, index) => {
        return (
          <div key={index} onClick={()=>{setSize(size)}}>{size}</div>
        )
      })}</div>
      <div><button onClick={() => {addToCart(product.id, size)}}>Add to Cart</button></div>
      <div>footer</div>
    </div>
  </div>
)
}

export default ProductDetail;