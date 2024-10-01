import React, { useRef } from 'react'
import "./Carousel.css";
import chevronRight from "../../../assets/images/utils/chevron-right.svg";
import chevronLeft from "../../../assets/images/utils/chevron-left.svg";
import quote from "../../../assets/images/utils/quote.svg";

const Carousel = ({ data }) => {

    const slider = useRef();
    let tx = 0; //translate x, initially it is 0. When clicked next button it should be -20 and so on

    const handleNext = () => {
        if (tx > -((100 / data.length) * (data.length - 2))) {
            tx -= 100 / data.length
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const handleBack = () => {
        if (tx < 0) {
            tx += 100 / data.length;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    return (
        <>
            <div className="carousel-wrapper">
                <img src={chevronRight} onClick={handleNext} className='next-btn' alt="" />
                <img src={chevronLeft} onClick={handleBack} className='back-btn' alt="" />
                <div className="carousel-slider">
                    <ul ref={slider} style={{ width: `${(data.length / 2) * 100}%` }}>
                        {
                            data.map((item, index) => (
                                <li key={index}>
                                    <div className="carousel-slide">
                                        <div className="carousel-user">
                                            <img src={item.image} className='carousel-profile' alt="" />
                                            <p className="carousel-desc sm-text">
                                                {item.content.description}
                                            </p>
                                            <div className="carousel-name">
                                                <div className="sm-text title">{item.content.name}</div>
                                                <span>{item.content.designation}</span>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Carousel
