import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table } from 'lucide-react';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Frontend validation
        if (!formData.email || !formData.password) {
            return setError('Please fill in all fields.');
        }

        setLoading(true);
        try {
            const response = await fetch('https://healtify-x18v.onrender.com/api/v1/auth/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                toast.error(data.message || 'Login failed');
            } else{
                toast.success("login sucessfully")
                  setTimeout(() => {
                    navigate('/explore');
                }, 2000);}

            
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auths-container ">
            <ToastContainer/>
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2 className="brand-name">HEALTHIFY</h2>
                <h3 className="form-title">Login</h3>

                {error && <p className="error-text text-red-500">{error}</p>}

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>

                <button className="submit-btn" type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : '→'}
                </button>

                <div className="toggle-link">
                    Don't have an account? <Link to="/signup"> Sign Up!</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
