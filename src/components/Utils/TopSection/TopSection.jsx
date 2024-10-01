import React from 'react';
import "./TopSection.css";

const TopSection = (props) => {

    const {data} = props;

    return (
        <>
            <div className="top-section-wrapper">
                <div className="top-section-container">
                    <p className="lg-text title">{data.title}</p>
                    <p className="sm-text">{data.content}</p>
                </div>
            </div>
        </>
    )
}

export default TopSection
