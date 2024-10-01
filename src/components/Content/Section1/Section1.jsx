import React from 'react'
import "./Section1.css";
import TopSection from '../../Utils/TopSection/TopSection';


const Section1 = () => {

    const topSectionData = { title: "Every step of order-to-cash customized for you", content: "Configure every step of your order-to-cash, you choose how. Zenskar gives you complete flexibility without a single line of code or through API access." }

    return (
        <>
            <div className="section1-wrapper">
                <div className="section1-container">
                    <TopSection data={topSectionData} />
                </div>
            </div>
        </>
    )
}

export default Section1
