import React from 'react';
import "./Demo.css";
import DemoIntro from './DemoIntro/DemoIntro';
import DemoMid from './DemoMid/DemoMid';
import DemoFooter from './DemoFooter/DemoFooter';

const Demo = () => {
    return (
        <>
            <div className="demo-wrapper">
                <div className="demo-container">
                    <DemoIntro/>
                    <DemoMid />
                    <DemoFooter />
                </div>
            </div>

        </>
    )
}

export default Demo