import React from 'react';
import './custombutton.styles.scss';

const CustomButton = ({children,isGoogleSign,...otherProps})=>{
    return(
    <button className={`${isGoogleSign ? 'googlesignin':''} custom-button`} {...otherProps}>{children}</button>
)}

export default CustomButton;