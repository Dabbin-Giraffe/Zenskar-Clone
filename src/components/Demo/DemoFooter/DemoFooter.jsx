import React from 'react';
import "./DemoFooter.css";
import rocket from "../../../assets/images/utils/rocket.svg";
import shine from "../../../assets/images/utils/shine.webp";
import camp from "../../../assets/images/utils/camp.webp";
import converge from "../../../assets/images/utils/converge.webp";
import bessemer from "../../../assets/images/utils/bessemer.webp"

const DemoFooter = () => {
    return (
        <>
            <div className="demo-footer-wrapper">
                <div className="lg-text title">Believers in our vision</div>
                <div className="demo-footer-companies">
                    <img src={rocket} alt="" />
                    <img src={shine} alt="" />
                    <img src={camp} alt="" />
                    <img src={converge} alt="" />
                    <img src={bessemer} alt="" />
                </div>
            </div>
        </>
    )
}

export default DemoFooter
