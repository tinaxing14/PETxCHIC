import React from 'react';

const Dropdown = () => {
  const list = ['Home', 'Products', 'Cart', 'About'].map((ele, index) => 
    <li className="dropdown__item" key={index}>{ele}</li>)
  return (
    <div className="dropdown__container">
      <ul className="dropdown__items">
        {list}
      </ul>
    </div>
  )
}


export default Dropdown;