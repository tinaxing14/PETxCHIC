import React from "react";
import { ShoppingCartOutlined, HomeOutlined, CoffeeOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import { Badge } from 'antd';
const NavBar = ({ cartNumber }) => (
  <div className="navbar__container">
    <div className="navbar__title">
    <a href="/">
      <p style={{color:"white"}}>PET x CHIC</p>
    </a>
    </div>
    <div className="navbar__routes">
      <div>
        <a href="/"><HomeOutlined style={{fontSize: '30px', color: 'white'}}/></a>
        <div>HOME</div>
      </div>
      <div>
      <a href="/cart">
      <Badge count={cartNumber} >
        <ShoppingCartOutlined style={{fontSize: '30px', color: 'white'}}/>
       </Badge> 
      </a>
      <div>CART</div>
      </div>
      <div>
        <CoffeeOutlined style={{fontSize: '30px', color: 'white'}}/>
        <div>ABOUT</div>
      </div>
    </div>
  </div>
);

export default NavBar;
