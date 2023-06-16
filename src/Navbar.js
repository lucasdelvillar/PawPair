import React from "react";
import { BrowserRouter, Route, Link, useLocation } from "react-router-dom";

function Navbar() {

    // const location = useLocation();
    // console.log(location.pathname)

    return (
        <nav className="navbar-container">
            <ul className="navbar">
                <li className="home-link">
                    <Link to="/Home">Home</Link>
                </li>

                <li className="userprofile-link">
                    <Link to="/UserProfile">Profile</Link>
                </li>

                <li className="signout-link">
                    {/* Sign out button will take user to the Login page */}
                    <Link to="/Login">Signout</Link>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;

