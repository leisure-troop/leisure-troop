import React from "react";
import { Link } from "react-router-dom";
import free from '../assets/free.svg';
function NavBar() {

    return (
        <div className="NavBar">
            <div className="logo-image"><img src={free} alt="Free Logo" className="logo" /></div>
            <div className="navbar-text">  <h3>About us</h3> </div>
            <Link to="/create-trip" > <h3>Create Your Trip </h3> </Link>



        </div>
    )
}


export default NavBar;