import React, { useState, useEffect } from "react";
import { Carousel } from 'antd';

const ImageSlider = ({ images }) => {
  images = images.slice(0,3);
  const [autoPlay, setAutoPlay] = useState(false);

  return (
    <div style={{maxHeight:'300px'}} onMouseEnter={() => { setAutoPlay(true)}} onMouseLeave={()=>{ setAutoPlay(false)}}>
      <Carousel autoplay={autoPlay}>
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