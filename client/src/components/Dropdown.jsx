import React, { useState } from 'react';

const Dropdown = () => {
  const [menu, setMenu] = useState('main');
  const mainMenu = 
  <ul className="dropdown__items">
    <a href="/"><li className="dropdown__item">Home</li></a>
    <li className="dropdown__item" onClick={() => setMenu('productMenu')}>Products</li>
    <a href="/cart"><li className="dropdown__item">Cart</li></a>
    <li className="dropdown__item">About</li>
  </ul>

  const productMenu = 
  <ul className="dropdown__items">
    <a href="#featureproducts"><li className="dropdown__item">All Products</li></a>
    <a href="/"><li className="dropdown__item">Cat</li></a>
    <a href="/"><li className="dropdown__item">Dog</li></a>
  </ul>

  return (
    <div className="dropdown__container">
      {menu === 'main' ? mainMenu : productMenu}
    </div>
  )
}


export default Dropdown;