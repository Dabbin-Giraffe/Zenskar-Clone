import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "../../assets/images/utils/logo.svg";
import Company from './Company/Company';
import Pricing from "./Pricing/Pricing";
import Product from "./Product/Product";
import Resources from "./Resources/Resources";
import Solutions from "./Solutions/Solutions";
import About from './About/About';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }

    const handleDemo = ()=>{
        navigate("/demo")
    }

    return (
        <div className="navbar-wrapper">
            <div className="navbar-container">
                <img className='logo' src={logo} alt="" onClick={()=>navigate("/")}/>
                <div className="navbar-menu">
                    <About />
                    <Product />
                    <Solutions />
                    <Resources />
                    <Company />
                    <Pricing />
                </div>
                <div className="navbar-buttons">
                    <button className="btn-secondary" onClick={handleLogin}><p className="xsm-text">Login</p> <span>→</span></button>
                    <button className="btn-primary" onClick={handleDemo}><p className="xsm-text">Book a Demo</p><span>→</span></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
