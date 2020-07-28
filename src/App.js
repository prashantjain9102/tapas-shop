import React,{Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/hompage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn from './components/signin/signin.component';
import {auth} from './firebase/firebase.util.js';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            currentuser:null
        }
    }
    
    unsubscribeFromAuth = null;

    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user)=>{
            this.setState({
                currentuser:user
            });
        console.log(user);
        });
    }
componentWillUnmount(){
    this.unsubscribeFromAuth();
}
render(){
    
  return (
    <div>
      <Header currentuser={this.state.currentuser} />
      <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/shop" component={Shop}/>
    <Route path="/signin" component={SignIn}/>
      </Switch>
    </div>
  );
}    
}

export default App;
