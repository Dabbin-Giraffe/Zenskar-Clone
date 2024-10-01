import React, { useRef, useState, useEffect } from 'react';
import "./Primary.css";

const Primary = () => {


  const [isClicked, setIsClicked] = useState(false);
  const divRef = useRef(null);

  const handleClick = (e) => {
    if (divRef.current && divRef.current.contains(e.target)) {
      setIsClicked(!isClicked);
    }
    else {
      setIsClicked(false);
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    }
  }, [isClicked])


  const handleSubmit = (e) => {

  }

  return (
    <>
      <div className="footer-primary-wrapper">
        <div className="footer-primary-container">
          <p className="xsm-text">Not ready to talk sales yet?</p>
          <form onSubmit={handleSubmit}>
            <div
              ref={divRef}
              className={isClicked ? `is-clicked highlight` : `highlight`}
            >
              <input type="text" className='primary-footer-input' placeholder='Business Email*'/>
            </div>
            <button type="submit"><p className="xsm-text title">Submit</p></button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Primary
