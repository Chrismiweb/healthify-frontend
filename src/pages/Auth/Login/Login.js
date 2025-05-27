import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";
function Login() {
    return (
        <div className="auth-container">
            <form className="auth-form">
                <h2 className="brand-name">HEALTHIFY</h2>
                <h3 className="form-title">Login</h3>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" />

                <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>

                <button className="submit-btn">→</button>

                <div className="toggle-link">
                    Don't have an account? <Link to="/signup"> Sign Up!</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
