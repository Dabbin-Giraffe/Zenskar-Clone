import React from 'react'
import Introduction from './Introduction/Introduction'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'

const Content = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="content-introduction-wrapper">
                    <Introduction />
                </div>
                <div className="content-section1-wrapper">
                    <Section1 />
                </div>
                <div className="content-section2-wrapper">
                    <Section2 />
                </div>
            </div>
        </>

    )
}

export default Content
