import React from 'react';
import {Link} from "react-router-dom";

function Login() {
    return (
        <>
        <h2 className="logo">PawPair</h2>
        <div className="login-container">
            <div className="login-div">
                <h1>Pawer Login</h1>
                <span className="welcome-text">Hey! Please enter your details to sign in.</span>
            </div>
            
            <div className="login-div">
                <input className="login-inputs" type="email" placeholder="Email"></input>
                <input className="login-inputs" type="password" placeholder="Password"></input>
                {/* TODO: mody a tag css rules for this button specifically. the a tag style is conflicing with <link> for this button */}
                <button className="login-button">Sign in</button>
            </div>

            <div className="login-div bold left">
                <span>Having trouble signing in?</span>
                {/* TODO: CHANGE TO A LINK */}
                <span className="create-account">Create account</span>
            </div>
            {/* .. means to navigate to one folder up */}
            {/* <img className="cinema-img" src={require("../images/Home-cinema.png")} alt="home cinema"/> */}
        </div>
        </>
    );
}

export default Login;