import React, { useState, useEffect } from 'react'
import "./Login.css";
import logo from "../../assets/images/utils/logo.svg"
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDetails = {
            email: email,
            password: password
        }

        try {
            const res = fetch("", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(formDetails)
            })
            if (res.ok) {
                const response = (await res).json();
                console.log(response);
            }
        } catch (e) {
            console.log("error with login form", e);
        }

    }

    const handleLogoClick = () => {navigate("/");}

    return (
        <>
            <div className="login-wrapper">
                <div className="login-container">
                    <div className="login-form-container">

                        <div className="login-logo">
                            <img onClick={handleLogoClick} src={logo} alt="" />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="login-mail">
                                <label htmlFor="email" className='xsm-text'>Email/Username</label>
                                <input type="mail" value={email} name='email' onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="login-password">
                                <label htmlFor="password" className='xsm-text'>Password</label>
                                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} id="" />
                            </div>
                            <p className="xsm-text title">Forgot Password?</p>
                            <button type="submit" className='btn-primary title'>Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
