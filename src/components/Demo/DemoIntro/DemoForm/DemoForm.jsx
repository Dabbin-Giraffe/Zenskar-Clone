import React, { useState, useRef, useEffect } from 'react';
import CustomInput from '../../../Utils/FormInput/CustomInput';
import "./DemoForm.css";

const DemoForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [valid, setValid] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value);
    setIsTouched(true);
  };

  const handleNameInput = (e) => {
    setNameInput(e.target.value);
    setIsTouched(true);
  };

  useEffect(() => {
    if (!isTouched) {
      // Do not run validation if form hasn't been interacted with
      return;
    }

    if (emailInput.length === 0 || nameInput.length === 0) {
      setValid(false);
      setErrorText("Please fill all the fields");
    } else if (!emailPattern.test(emailInput)) {
      setValid(false);
      setErrorText("Not a valid email format");
    } else {
      setValid(true);
      setErrorText("");
    }
  }, [emailInput, nameInput]);

  return (
    <>
      <div className="demo-form-container">
        <form onSubmit={handleSubmit}>
          <div className="demo-name-wrapper">
            <CustomInput
              type="text"
              value={nameInput}
              onChange={handleNameInput}
              placeholder="First name"
              required={true}
              autoFocus={true}
              className=""
              name="demo-name"
            />
          </div>
          <div className="demo-email-wrapper">
            <CustomInput
              type="email"
              value={emailInput}
              onChange={handleEmailInput}
              placeholder="Business Email*"
              required={true}
              autoFocus={true}
              className=""
              name="email"
            />
          </div>
          {!valid && <div className="xsm-text warn title">{errorText}</div>}
          <div className="xsm-text">
            I agree to the <span>privacy policy</span> & <span>terms of use</span> by submitting the form
          </div>
          <div className="demo-form-check">
            <input type="checkbox" name="demo-form-checkbox" id="" />
            <label className='xsm-text' htmlFor="demo-form-checkbox">Surprise me with good resources on email occasionally :)</label>
          </div>
          <button type="submit" className="btn-primary title">Proceed to Book</button>
        </form>
      </div>
    </>
  );
};

export default DemoForm;
