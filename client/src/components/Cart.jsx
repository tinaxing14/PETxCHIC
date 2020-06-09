import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { List, Avatar, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    loadCart("tinaxingtest@gmail.com");
  }, []);
  const loadCart = (userId) => {
    axios
      .get(`/api/products/cart/${userId}`)
      .then((response) => {
        console.log(response);
        setCartProducts(response.data[0].cart);
        // let total = response.data[0].cart.reduce((acc, item) => acc + item.price);
        // console.log(total)
        // setTotalPrice(total);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteProduct = (userId, productid) => {
    axios.delete(`/api/products/cart/${userId}/${productid}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  return (
    <div className='cart__container'>
      <div className='cart__inner'>
      <div className='cart__title'>My Cart</div>
      <div className='cart__list'>
      <List
        itemLayout="vertical"
        size="meidum"
        dataSource={cartProducts}
        footer={
          <div>
            <b>PETxCHIC</b> Shopping Cart
          </div>
        }
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[<DeleteOutlined onClick={()=>{deleteProduct('tinaxingtest@gmail.com',item.id)}}/>]}
            extra={
              <img
                width={100}
                alt="logo"
                src={item.image}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              title={item.name}
              description={`$${item.price}   
                            Quantity: ${item.quantity}
                            Size: ${item.size}`}
            />
            {`Total Price: $${item.price} x ${item.quantity} = $${item.price*item.quantity}`}
          </List.Item>
        )}
      />
      </div>
      </div>
      <div className='cart__checout'>
            Total Price: {totalPrice}
          </div>
          <button>Checkout</button>
    </div>
  );
};

export default Cart;
