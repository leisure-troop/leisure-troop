import React from "react";
import { Link } from "react-router-dom";
function NavBar() {

    return (
        <div className="NavBar">
            <div className="logo-image"><img className="logo" src="./src/assets/free.svg" /></div>
            <h3>About us</h3>
            <Link to="/create-trip" > <h3>Create Your Trip </h3> </Link>



        </div>
    )
}


export default NavBar;