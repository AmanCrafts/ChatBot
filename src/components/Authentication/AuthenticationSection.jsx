import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

// Authentication section handles switching between login and signup forms
const AuthenticationSection = ({ onLogin, onSignup }) => {
    // State to toggle between login and signup forms
    const [isLoginForm, setIsLoginForm] = useState(true);

    // Toggle between forms
    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    // Render current form based on state
    return (
        <div className="authentication-section">
            {isLoginForm ? (
                <LoginForm onLogin={onLogin} toggleForm={toggleForm} />
            ) : (
                <SignupForm onSignup={onSignup} toggleForm={toggleForm} />
            )}
        </div>
    );
};

export default AuthenticationSection;
