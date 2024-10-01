import React from 'react';
import "./Introduction.css";
import fiveStars from "../../../assets/images/utils/five-star.svg";
import orangeLogo from "../../../assets/images/utils/red-logo.png";
import arrowLogo from "../../../assets/images/utils/arrow-logo.svg";
import ms100 from "../../../assets/images/utils/100ms.png";
import edify from "../../../assets/images/utils/edify.png";
import pantera from "../../../assets/images/utils/pantera.png";
import vertice from "../../../assets/images/utils/vertice.png";
import yemboai from "../../../assets/images/utils/yemboai.png";
import squadStack from "../../../assets/images/utils/squad-stack.png";

const Introduction = () => {
    return (
        <>
            <div className="introduction-wrapper">
                <div className="introduction-container">
                    <div className="introduction-top">
                        <div className="introduction-text">
                            <p className="xsm-text intro-title title">BUILT FOR MODERN TEAMS FOR MODERN NEEDS</p>
                            <div className='xlg-text title intro-text'>
                                <p className='intro-text intro-first'>Limitations with</p>
                                <div className="animate-text title">
                                    <p className="animate">Billing?</p>
                                    <p className="animate">Renvenue recognition?</p>
                                    <p className="animate">Accounts receivable?</p>
                                </div>
                                <p className='intro-text'>Full flexibility, no compromise</p>
                            </div>
                            <p className="sm-text intro-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga blanditiis culpa aliquid dolore adipisci quae aliquam laborum labore iusto deleniti.</p>
                            <button className='btn-primary'><p className='xsm-text title'>Book a Demo</p><span className='title'>→</span></button>
                        </div>
                        <div className="introduction-demo">
                            <div className="introduction-video">
                                <iframe title="vimeo-player" src="https://player.vimeo.com/video/941169137?h=8b98465039" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                            </div>
                            <div className="introduction-reviews">
                                <img src={arrowLogo} className='intro-logo' alt="" />
                                <span className='intro-rating title'>4.9</span>
                                <img src={fiveStars} className='intro-star' alt="" />
                                <img src={orangeLogo} className='intro-logo' alt="" />
                                <span className="intro-rating title">4.8</span>
                                <img src={fiveStars} alt="" className='intro-star' />
                            </div>
                        </div>
                    </div>
                    <div className="introduction-bottom">
                        <img src={ms100} alt="" className="intro-brand" />
                        <img src={edify} alt="" className="intro-brand" />
                        <img src={pantera} alt="" className="intro-brand" />
                        <img src={vertice} alt="" className="intro-brand" />
                        <img src={yemboai} alt="" className="intro-brand" />
                        <img src={squadStack} alt="" className="intro-brand" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction
