import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
const Footer=({phrase,link,linkaddress})=>{
    return(
    <div className="footer-link">
        {phrase}
        <Link to={linkaddress}  className='footer-link-element'>
        {link}
        </Link>
    </div>
    );
};
export default Footer;
