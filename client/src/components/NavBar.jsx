/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { ShoppingCartOutlined, HomeOutlined, CoffeeOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import { Badge } from 'antd';
import Dropdown from './Dropdown';

const NavBar = ({ cartNumber }) => {
  const [dropDown, toggleDropDown] = useState(false);
  return (
  <div className="navbar__container">
    <div className="navbar__title">
      <span className="navbar__menu" onClick={() => toggleDropDown(!dropDown)}>PET x CHIC</span>
      {dropDown ? <Dropdown/> : null}
    </div>
    <div className="navbar__routes">
      <div>
        <a href="/"><HomeOutlined style={{fontSize: '30px', color: 'white'}}/><div>HOME</div></a>
      </div>
      <div>
      <a href="/cart">
        <Badge count={cartNumber} >
          <ShoppingCartOutlined style={{fontSize: '30px', color: 'white'}}/>
        </Badge> 
       <div>CART</div>
      </a>
      </div>
      <div>
        <CoffeeOutlined style={{fontSize: '30px', color: 'white'}}/>
        <div>ABOUT</div>
      </div>
    </div>
  </div>)
};

export default NavBar;
