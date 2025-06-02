import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthenticationSection = ({ onLogin, onSignup }) => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };

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
