import React, { useRef, useState, useEffect } from 'react';
import "./Dropdown.css";
import chevronUp from "../../../assets/images/utils/chevron-up.svg";
import chevronDown from "../../../assets/images/utils/chevron-down.svg";

const Dropdown = (props) => {
    const { data } = props;
    const { menuTitle, items } = data;

    const [isHidden, setIsHidden] = useState(true);
    const dropdownRef = useRef(null);
    const hoverTimeout = useRef(null);


    const handleMouseEnter = () => {
        clearTimeout(hoverTimeout.current);
        setIsHidden(false);
    };

    const handleMouseLeave = () => {
        hoverTimeout.current = setTimeout(() => {
            setIsHidden(true);
        }, 50); 
    };

    useEffect(() => {
        const dropdown = dropdownRef.current;

        if (dropdown) {
            dropdown.addEventListener('mouseenter', handleMouseEnter);
            dropdown.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (dropdown) {
                dropdown.removeEventListener('mouseenter', handleMouseEnter);
                dropdown.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="dropdown-wrapper">
            <div className="dropdown-container" ref={dropdownRef}>
                <div className="option-container">
                    <p className="xsm-text">{menuTitle}</p>
                    <img src={isHidden ? chevronDown : chevronUp} className='option-icon' alt="" />
                </div>
                <div className={`${isHidden ? 'dropdown-content' : 'dropdown-visible'}`}>
                    {items.map((item, index) => (
                        <div
                            className={`dropdown-items ${item.elements.length > 5 ? 'two-columns' : ''}`}
                            key={index}>
                            {item.title && (
                                <div className="dropdown-title">
                                    {item.icon && <img className='option-icon' src={item.icon} alt="" />}
                                    <p className="xsm-text title">{item.title.toUpperCase()}</p>
                                </div>
                            )}
                            <ul>
                                {item.elements.map((element, elementIndex) => (
                                    <li className={`xsm-text ${element.classes ? element.classes : ""}`} key={elementIndex}>
                                        {typeof element.content === "string" ? element.content : element.content}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="highlight-hover"></div>
        </div>
    );
};

export default Dropdown;
