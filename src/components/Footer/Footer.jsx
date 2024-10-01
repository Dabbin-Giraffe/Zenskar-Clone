import React from 'react';
import Primary from "./Primary/Primary";
import Secondary from "./Secondary/Secondary";
import Terinary from "./Terinary/Terinary";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                <div className="footer-container">
                    <div className="footer-primary">
                        <Primary />
                    </div>
                    <hr />
                    <div className="footer-secondary">
                        <Secondary />
                    </div>
                    <hr />
                    <div className="footer-trinary">
                        <Terinary />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
