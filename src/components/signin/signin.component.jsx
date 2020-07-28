import React,{Component} from 'react';
import './signin.styles.scss';
import FormInput from '../forminput/forminput.component';
import CustomButton from '../custom-button/custombutton.component';
import { signInWithGoogle } from '../../firebase/firebase.util.js';
class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
        };
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email:'',
            password:'',
        });
    };
    
    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    };
    
    render(){
        return(
            <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={this.handleSubmit}>
               <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} required label="email"/>
               <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} required label="password"/>
               <div className="buttons">
                <CustomButton type="submit">Submit Form</CustomButton>
                <CustomButton onClick = {signInWithGoogle} isGoogleSign>Sign In With Google</CustomButton>
               </div>
            </form>
            </div>
        )
    }    
}

export default SignIn;