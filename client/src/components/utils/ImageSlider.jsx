import React from 'react';
import { Carousel } from 'antd';

const ImageSlider = ({ images }) => {
  images = images.slice(0,3)
  return (
    <div style={{maxHeight:'300px'}}>
      <Carousel>
        {images.map((image,index) => (
          <div key ={index}>
            <img 
            style={{maxHeight:'300px'}}
            src={image} alt="productImage"/>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageSlider;