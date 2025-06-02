import { useState } from "react";

const LoginForm = ({ onLogin, toggleForm }) => {
    // Login form data state
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, this would connect to a backend authentication service
        console.log("Login attempt with:", formData);
        onLogin(formData);
    };

    return (
        <div className="auth-form">
            <h2>Welcome Back</h2>
            <p className="auth-subtitle">Sign in to continue</p>

            <form onSubmit={handleSubmit}>
                {/* Email field */}
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

                {/* Password field */}
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

            {/* Toggle to signup form */}
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
