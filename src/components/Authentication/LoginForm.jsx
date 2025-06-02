import { useState } from "react";

const LoginForm = ({ onLogin, toggleForm }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to your backend
        console.log("Login attempt with:", formData);
        onLogin(formData);
    };

    return (
        <div className="auth-form">
            <h2>Welcome Back</h2>
            <p className="auth-subtitle">Sign in to continue</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button type="submit" className="auth-button">
                    Sign In
                </button>
            </form>

            <p className="auth-toggle">
                Don't have an account?
                <button className="toggle-button" onClick={toggleForm}>
                    Sign Up
                </button>
            </p>
        </div>
    );
};

export default LoginForm;
