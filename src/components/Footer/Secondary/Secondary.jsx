import React from 'react'
import logo from "../../../assets/images/utils/logo.svg";
import gdpr from "../../../assets/images/utils/gdpr.png";
import aicpa from "../../../assets/images/utils/aicpa.png";
import performer from "../../../assets/images/utils/performer.avif"
import "./Secondary.css"

const Secondary = () => {


  const data = [

    { title: "Company", elements: [{ content: "lorem", classes: "" }, { content: "lorem", classes: "" }, { content: "lorem", classes: "" }, { content: "lorem", classes: "" }] },
    { title: "Offerings", elements: [{ content: "lorem", classes: "" }, { content: "lorem", classes: "" }, { content: "lorem", classes: "" }, { content: "lorem", classes: "" }, { content: "lorem", classes: "" }, { content: "lorem", classes: "" }] },
    { title: "Solutions", elements: [{ content: "lorem", classes: "" }, { content: "lorem", classes: "" }, { content: "lorem", classes: "" }, { content: "lorem", classes: "" }, { content: "lorem", classes: "" }, { content: "lorem", classes: "" }] },
    { title: "Resources", elements: [{ content: "lorem", classes: "" }, { content: "lorem", classes: "" }, { content: "lorem", classes: "" }, { content: "lorem", classes: "" }, { content: "lorem", classes: "" }] },
    { title: "Compare", elements: [{ content: "lorem", classes: "" }, { content: "lorem", classes: "" }, { content: "lorem", classes: "" }] }


  ]

  return (
    <>
      <div className="footer-secondary-wrapper">
        <div className="footer-secondary-container">
          <div className="footer-secondary-logos">
            <img src={logo} className='footer-logo' alt="" />
            <div className="footer-secondary-certifications">
              <img src={gdpr} alt="" />
              <img src={aicpa} alt="" />
            </div>
            <div className="footer-secondary-performers">
              <img src={performer} alt="" />
              <img src={performer} alt="" />
              <img src={performer} alt="" />
            </div>
          </div>
          <div className="footer-secondary-options">
            {data.map((item, index) => (
              <>
                <div className="footer-secondary-lists">

                  <div className="xsm-text title">{item.title}</div>
                  <ul>
                    {item.elements.map((element, elementIndex) => (
                      <li key={elementIndex}>{element.content}</li>
                    ))}
                  </ul>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Secondary
