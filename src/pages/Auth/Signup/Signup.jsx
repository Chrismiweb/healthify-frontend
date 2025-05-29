import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate  } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (firstName.trim().length < 6) {
      newErrors.firstName = "First name must be at least 6 characters long";
    }
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    } else {
      if (!uppercaseRegex.test(password)) {
        newErrors.password = "Password must contain at least one uppercase letter";
      }
      if (!specialCharRegex.test(password)) {
        newErrors.password = "Password must contain at least one special character";
      }
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const registerUser = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    

    setLoading(true);
    const baseUrl = 'https://healtify-x18v.onrender.com/api/v1/auth/users/signup';

    try {
      const res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, phoneNumber, gender, email, password, confirmPassword }),
      });

      const response = await res.json();
       if (!res.ok) {
        //  console.log("Showing error toast:", response.message);
      toast.error(response.message || "Something went wrong. Please try again.");
    } else {
      toast.success(response.message || "Sign up successful")
          setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
      

    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container py-[50px]">
      <form className="auth-form" onSubmit={registerUser}>
        <h2 className="brand-name">WELCOME TO HEALTHIFY</h2>
        <h3 className="form-title">Sign Up</h3>

        <label>First Name</label>
        <input type="text" name='firstName' placeholder="First name" onChange={(e) => setFirstName(e.target.value)} />
        {errors.firstName && <p className="error text-red-500">{errors.firstName}</p>}

        <label>Last Name</label>
        <input type="text" placeholder="Last name" name='lastName' onChange={(e) => setLastName(e.target.value)} />

        <label>Phone Number</label>
        <input type="tel" placeholder="Phone Number" name="email" onChange={(e) => setPhoneNumber(e.target.value)} />

        <label htmlFor="gender" name="gender">Gender</label>
        <select 
          id="gender" 
          name="gender" 
          required 
          value={gender} 
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>



        <label>Email</label>
        <input type="email" placeholder="Email" name='email' onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p className="error text-red-500">{errors.email}</p>}

        <label>Password</label>
        <input type="password" placeholder="Create a password" name='password' onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <p className="error text-red-500">{errors.password}</p>}

        <label>Confirm Password</label>
        <input type="password" placeholder="Re-enter password" name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} />
        {errors.confirmPassword && <p className="error text-red-500">{errors.confirmPassword}</p>}

        <button className="submit-btn" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
        <ToastContainer/>

        <div className="toggle-link">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
