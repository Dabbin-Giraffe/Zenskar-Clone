import React, { useState, useRef, useEffect } from 'react';
import "./CustomInput.css";


const CustomInput = ({
    type = 'text',
    value = '',
    onChange,
    placeholder = '',
    required = false,
    autoFocus = false,
    name = '',
    className = '',
    onFocus
}) => {

    const inputRef = useRef(null);

    const [isFocused, setIsFocused] = useState(false);


    useEffect(() => {
        if (autoFocus && onFocus) {
            inputRef.current.focus();
        }
    }, [autoFocus])

    const handleOnFocus = () => {
        setIsFocused(true);
    }
    const handleOnBlur = () => {
        setIsFocused(false);
    }

    return (
        <>
            <div className={`custom-input-wrapper ${isFocused ? 'input-focus' : ``}`}>
                <input
                    ref={inputRef}
                    type={type}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    name={name}
                    className={className}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                />
            
            </div>
        </>
    )
}

export default CustomInput;
