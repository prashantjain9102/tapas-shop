import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/hompage/homepage.component';
import './App.css';

const HatsPage = () => (
<div><h2>HATS PAGE</h2></div>
)

function App() {
  return (
    <div>
    <Route exact path="/" component={HomePage}/>
    <Route path="/hats" component={HatsPage}/>
    </div>
  );
}

export default App;
