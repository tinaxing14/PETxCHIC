import React from "react";
import Product from './Product.jsx';
import Cart from './Cart.jsx'
import Footer from './Footer.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar.jsx'

const App = () => (
  <div>
    <NavBar/>
    <Switch>
      <Route path='/' component={Product} exact />
      <Route path='/cart' component={Cart}/>
    </Switch>
    <Footer/>
  </div>
);

export default App;
