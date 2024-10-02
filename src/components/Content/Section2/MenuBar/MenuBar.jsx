import React, { useState, useEffect, useRef } from 'react';
import CustomContent from '../CustomContent/CustomContent';
import './MenuBar.css';
import {data} from "./CustomData";

const MenuBar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const menuRef = useRef(null);
    const [clickIndex, setClickIndex] = useState(null);

    const sectionRefs = useRef([useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]);

    // Function to scroll to the section smoothly with an offset
    const scrollToSection = (sectionRef, offset = 0) => {
        const element = sectionRef.current;
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            window.setTimeout(() => {
                window.scrollBy({
                    top: offset,
                    behavior: "smooth"
                });
            }, 10);
        }
    };

    const handleScroll = () => {
        if (menuRef.current) {
            const menuTopOffset = menuRef.current.offsetTop;
            const currentScrollPos = window.scrollY;

            console.log("currentScrollPos:", currentScrollPos); // For debugging

            // Check if we need to stick the menu
            if (currentScrollPos + 200 > menuTopOffset && !isSticky && currentScrollPos < 4450) {
                console.log("sticky");
                setIsSticky(true);
            }
            // Check if we need to unstick the menu
            else if ((currentScrollPos <= 850 || currentScrollPos >= 4450) && isSticky) {
                console.log("not sticky");
                setIsSticky(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSticky]);

    return (
        <>
            <div className="menubar-wrapper">
                <div
                    ref={menuRef}
                    className={`menubar-container ${isSticky ? 'menubar-stick' : ''}`}
                >
                    <ul>
                        {/** Adjusting click handlers and class logic for menu items */}
                        <li onClick={() => { scrollToSection(sectionRefs.current[0], -200); setClickIndex(1); }}>
                            <div className={`menu-items-content ${clickIndex === 1 ? 'menubar-click' : ''}`}>
                                <p className="sm-text">Pricing</p>
                            </div>
                        </li>
                        <li onClick={() => { scrollToSection(sectionRefs.current[1], -200); setClickIndex(2); }}>
                            <div className={`menu-items-content ${clickIndex === 2 ? 'menubar-click' : ''}`}>
                                <p className="sm-text">Usage</p>
                            </div>
                        </li>
                        <li onClick={() => { scrollToSection(sectionRefs.current[2], -200); setClickIndex(3); }}>
                            <div className={`menu-items-content ${clickIndex === 3 ? 'menubar-click' : ''}`}>
                                <p className="sm-text">Billing</p>
                            </div>
                        </li>
                        <li onClick={() => { scrollToSection(sectionRefs.current[3], -200); setClickIndex(4); }}>
                            <div className={`menu-items-content ${clickIndex === 4 ? 'menubar-click' : ''}`}>
                                <p className="sm-text">Collections</p>
                            </div>
                        </li>
                        <li onClick={() => { scrollToSection(sectionRefs.current[4], -200); setClickIndex(5); }}>
                            <div className={`menu-items-content ${clickIndex === 5 ? 'menubar-click' : ''}`}>
                                <p className="sm-text">Revenue Recognition</p>
                            </div>
                        </li>
                        <li onClick={() => { scrollToSection(sectionRefs.current[5], -200); setClickIndex(6); }}>
                            <div className={`menu-items-content ${clickIndex === 6 ? 'menubar-click' : ''}`}>
                                <p className="sm-text">Analytics</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="custom-content-wrapper">
                    <CustomContent data={data} sectionRefs={sectionRefs.current}/>
                </div>
            </div>
        </>
    );
};

export default MenuBar;
