import React from 'react';
import './Signup.css';
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="auth-container py-[100px]">
      <form className="auth-form">
        <h2 className="brand-name">WELCOME TO HEALTHIFY</h2>
        <h3 className="form-title">Sign Up</h3>

        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder=" full name" />

        <label htmlFor="name">User Name</label>
        <input type="text" id="user name" placeholder="User Name" />

        <label htmlFor="Phone number">Phone Number</label>
        <input type="tel" id="phone number" placeholder="Phone Number" />

        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder=" email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Create a password" />

        <label htmlFor="confirm">Confirm Password</label>
        <input type="password" id="confirm" placeholder="Re-enter password" />

        <button className="submit-btn">Sign Up</button>

        <div className="toggle-link">
          Already have an account? <Link to="/login"> Log in</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
