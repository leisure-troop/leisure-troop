import React from "react";
import { Link } from "react-router-dom";
import free from '../assets/free2.svg';
function NavBar() {

    return (
        <div className="NavBar">
            <div className="logo-image"><img src={free} alt="Free Logo" className="logo" /></div>
            <div className="navbar-right">
                <Link className="navbar-text" to="/">Home</Link>
                <Link className="navbar-text" to="/about-us">About</Link>
                <Link className="navbar-text" to="/create-trip">Create Trip</Link>
            </div>



        </div>
    )
}


export default NavBar;