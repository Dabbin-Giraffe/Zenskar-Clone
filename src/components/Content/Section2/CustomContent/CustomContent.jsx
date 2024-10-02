import React from 'react';
import "./CustomContent.css"
import customContent1 from "../../../../assets/images/utils/custom-content-1.webp";
import customContent2 from "../../../../assets/images/utils/custom-content-2.svg"
import customContent3 from "../../../../assets/images/utils/custom-content-3.svg"

const CustomContent = () => {

    const checkMarkLink = "https://cdn.prod.website-files.com/64b66ad2d48ca7a912ddf3eb/668eac4c8c0435c4b47c9bf1_Green%20Checkmark.svg";

    const data = [
        {
            feature: "PRICING FLEXIBILITY",
            title: "Configure any pricing model you can imagine",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem omnis, debitis, corrupti voluptatum illo numquam itaque ipsam eveniet molestiae modi laudantium, necessitatibus facilis reprehenderit quia?",
            lists: [{
                imgLink: checkMarkLink,
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem omnis"
            }, {
                imgLink: checkMarkLink,
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem omnis"
            }],
            image: customContent1,
            link : "Explore pricing configuration"
        },
        {
            feature: "SIMPLIFIED METERING",
            title: "Usage metering and monitoring made easy",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem omnis, debitis, corrupti voluptatum illo numquam itaque ipsam eveniet molestiae modi laudantium, necessitatibus facilis reprehenderit quia?",
            lists: [{
                imgLink: checkMarkLink,
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem omnis"
            }, {
                imgLink: checkMarkLink,
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem omnis"
            }, {
                imgLink: checkMarkLink,
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem omnis"
            }],
            image: customContent2,
            link : "Simplify usage data management"
        },
        {
            feature: "BILLING AND INVOICING",
            title: "Automate billing from contracts to invoice generation",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem omnis, debitis, corrupti voluptatum illo numquam itaque ipsam eveniet molestiae modi laudantium, necessitatibus facilis reprehenderit quia?",
            lists: [{
                imgLink: checkMarkLink,
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem omnis"
            }, {
                imgLink: checkMarkLink,
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem omnis"
            }],
            image: customContent3,
            link : "Set your billing on autopilot"
        }
    ]

    return (
        <>
            <div className="custom-content-container">
                {
                    data.map((items, index) => (
                        <div className={`${index % 2 === 0 ? `custom-content-element` : `custom-content-element-reverse`}`} key={index}>
                            <div className="custom-content-left">
                                <span className="custom-content-feature xsm-text title">
                                    {items.feature}
                                </span>
                                <p className="med-text title">{items.title}</p>
                                <div className="sm-text">{items.content}</div>
                                <div className="custom-content-items">
                                    <ul>
                                        {
                                            items.lists.map((list, listIndex) => (
                                                <li>
                                                    <img src={list.imgLink} className='custom-content-checkmark' alt="" />
                                                    <p className="xsm-text">{list.content}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="custom-content-link">
                                    <span className="xsm-text title custom-content-link-text">{items.link}</span>
                                    <span className="custom-content-link-arrow sm-text title">→</span>
                                </div>
                            </div>
                            <div className="custom-content-right">
                                <img src={items.image} className='custom-content-image' alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default CustomContent
