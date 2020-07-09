import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/hompage/homepage.component';
import Shop from './pages/shop/shop.component';
import './App.css';

function App() {
  return (
    <div>
    <Route exact path="/" component={HomePage}/>
    <Route path="/shop" component={Shop}/>
    </div>
  );
}

export default App;
