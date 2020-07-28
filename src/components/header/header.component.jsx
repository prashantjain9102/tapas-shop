import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.util.js';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
const Header = ({currentuser})=>(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/shop">Contact</Link>
            {
                currentuser ? 
                <div className="option" onClick={()=>auth.signOut()}>SignOut</div>
                    :
                    <Link className="option" to="/signin">Sign In</Link>
            }
        </div>
        
    </div>

)

export default Header;