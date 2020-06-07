import React, { useState, useEffect } from "react";
import { Carousel } from 'antd';

const ImageSlider = ({ images, autoplay, classname }) => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    infinite:true,
    autoplay:autoplay
}
  return (
    <div className={classname}>
      <Carousel {...settings} draggable={true}>
        {images.map((image,index) => (
          <div key ={index}>
            <img 
            className={classname}
            src={image} alt="productImage"/>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageSlider;