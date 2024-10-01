import React from 'react';
import "./Terinary.css";
import linkedin from "../../../assets/images/utils/linkedin.svg";

const Terinary = () => {
  return (
    <>
      <div className="footer-terinary-wrapper">
        <div className="footer-terinary-container">
          <div className="footer-terinary-left">
              <p className="xms-text">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="footer-terinary-right">
            <div className="footer-terinary-terms">
              <p className="xms-text">Terms of Service</p>
              <span className='xsm-text title'>•</span>
              <p className="xms-text">Privacy Policy</p>
            </div>
            <div className="footer-terinary-socials">
              <img src={linkedin} alt="" />
              <img src={linkedin} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Terinary
