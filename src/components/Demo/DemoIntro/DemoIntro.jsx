import React from 'react';
import DemoForm from './DemoForm/DemoForm';
import ms100 from "../../../assets/images/utils/100ms.png";
import edify from "../../../assets/images/utils/edify.png";
import pantera from "../../../assets/images/utils/pantera.png";
import vertice from "../../../assets/images/utils/vertice.png";
import yemboai from "../../../assets/images/utils/yemboai.png";
import squadStack from "../../../assets/images/utils/squad-stack.png";
import "./DemoIntro.css"

const DemoIntro = () => {

    const demoList = [
        {
            imgLink: "https://cdn.prod.website-files.com/64b66ad2d48ca7a912ddf3eb/65bd31dffc506540101b156c_checkmark_large.svg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            imgLink: "https://cdn.prod.website-files.com/64b66ad2d48ca7a912ddf3eb/65bd31dffc506540101b156c_checkmark_large.svg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            imgLink: "https://cdn.prod.website-files.com/64b66ad2d48ca7a912ddf3eb/65bd31dffc506540101b156c_checkmark_large.svg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            imgLink: "https://cdn.prod.website-files.com/64b66ad2d48ca7a912ddf3eb/65bd31dffc506540101b156c_checkmark_large.svg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            imgLink: "https://cdn.prod.website-files.com/64b66ad2d48ca7a912ddf3eb/65bd31dffc506540101b156c_checkmark_large.svg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing."
        }
    ]

    return (

        <>
            <div className="demo-intro-wrapper">
                <div className="demo-intro-container">
                    <div className="demo-intro-left">
                        <div className="demo-intro-text">
                            <p className="xlg-text title">End billing and revenue recognition woes</p>
                            <p className="xsm-text">Schedule a 1:1 demo customized for your billing needs and pain points. Gain insights to improve your billing process and evaluate if Zenskar is the right solution for your business. Here’s what you can expect:</p>
                        </div>
                        <div className="demo-intro-list">
                            <ul>
                                {demoList.map((item, index) => (
                                    <div className="demo-intro-item">
                                        <li>
                                            <img src={item.imgLink} alt="" />
                                            <p className="xsm-text">{item.content}</p>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                        <div className="demo-intro-companies">
                            <p className="sm-text title">Driving growth for</p>
                            <div className="demo-intro-companies-imgs">

                                <img src={ms100} alt="" />
                                <img src={edify} alt="" />
                                <img src={pantera} alt="" />
                                <img src={vertice} alt="" />
                                <img src={yemboai} alt="" />
                                <img src={squadStack} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="demo-intro-form">
                        <DemoForm />
                    </div>
                </div>
            </div>

        </>
    )
}

export default DemoIntro
