import React, { useState } from "react";
import Product from './Product.jsx';
import Cart from './Cart.jsx'
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar.jsx'

const App = () => {
  const[cartNumber, setCartNumber] = useState(0);
  return (
  <div className="maindiv">
    <NavBar cartNumber={cartNumber}/>
    <div className="navbar__picture"></div>
    <div className='app__cover grow'>
      <img className="cover__image" src="https://petfashion.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-08+at+5.14.00+PM.png"/>
    </div>
    <a href='#featureproducts'><div className="app_featureproducts">Featured Products</div></a>
    <Switch>
      <Route path='/' render={(props)=> <Product {...props} setCartNumber={setCartNumber} cartNumber={cartNumber}/>} exact />
      <Route path='/cart' component={Cart}/>
    </Switch>
    <footer className='app__footer'>
    </footer>
  </div>)
  
};

export default App;
