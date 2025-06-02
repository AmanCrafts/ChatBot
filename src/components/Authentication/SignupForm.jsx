import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Country, State } from "country-state-city";

const SignupForm = ({ onSignup, toggleForm }) => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        countryCode: "",
        countryName: "",
        stateCode: "",
        stateName: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        password: "",
        confirmPassword: "",
        email: "",
    });

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);

    // Fetch all countries on component mount
    useEffect(() => {
        const allCountries = Country.getAllCountries();
        setCountries(allCountries);
    }, []);

    // Update states when country changes
    useEffect(() => {
        if (formData.countryCode) {
            const countryStates = State.getStatesOfCountry(formData.countryCode);
            setStates(countryStates);
        } else {
            setStates([]);
        }
    }, [formData.countryCode]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // If country changes, reset state
        if (name === "countryCode") {
            const selectedCountry = countries.find(
                (country) => country.isoCode === value
            );
            setFormData((prev) => ({
                ...prev,
                countryCode: value,
                countryName: selectedCountry?.name || "",
                stateCode: "",
                stateName: "",
            }));
        }

        // If state changes
        if (name === "stateCode") {
            const selectedState = states.find((state) => state.isoCode === value);
            setFormData((prev) => ({
                ...prev,
                stateCode: value,
                stateName: selectedState?.name || "",
            }));
        }

        // Clear errors when user is typing
        if (name === "password" || name === "confirmPassword" || name === "email") {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    // Handle phone number change
    const handlePhoneChange = (value, data) => {
        setFormData((prev) => ({
            ...prev,
            phoneNumber: value,
            // You can also store country info from phone selection if needed
            // dialCode: data.dialCode
        }));
    };

    // Email validation regex
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    // Password validation - check for all requirements
    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
            password
        );

        let errorMessage = "";

        if (!hasUpperCase) errorMessage += "• Missing uppercase letter\n";
        if (!hasLowerCase) errorMessage += "• Missing lowercase letter\n";
        if (!hasNumber) errorMessage += "• Missing number\n";
        if (!hasSpecialChar) errorMessage += "• Missing special character\n";

        return {
            isValid: hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar,
            errorMessage: errorMessage,
        };
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { password: "", confirmPassword: "", email: "" };

        // Email validation
        if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        // Password validation
        const passwordCheck = validatePassword(formData.password);
        if (!passwordCheck.isValid) {
            newErrors.password = passwordCheck.errorMessage;
            isValid = false;
        }

        // Confirm password validation
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Signup attempt with:", formData);
            onSignup(formData);
        }
    };

    return (
        <div className="auth-form">
            <h2>Create Account</h2>
            <p className="auth-subtitle">Sign up to get started</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Choose a username"
                        required
                    />
                </div>

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
                    {errors.email && (
                        <span className="error-message">{errors.email}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <PhoneInput
                        country={"us"} // Default country
                        value={formData.phoneNumber}
                        onChange={handlePhoneChange}
                        enableSearch={true}
                        countryCodeEditable={false}
                        specialLabel={""}
                        inputProps={{
                            name: "phoneNumber",
                            required: true,
                            className: "phone-input",
                        }}
                        // Show both flag, country name and iso code in dropdown
                        disableCountryCode={false}
                        showCountryNameInList={true}
                        autoFormat={true}
                        preferredCountries={["us", "ca", "gb", "in"]}
                        // Display format settings
                        enableAreaCodes={false}
                        searchPlaceholder="Search countries..."
                    />
                </div>

                <div className="location-fields">
                    <div className="form-group">
                        <label htmlFor="countryCode">Country</label>
                        <select
                            id="countryCode"
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                                <option key={country.isoCode} value={country.isoCode}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="stateCode">State/Province</label>
                        <select
                            id="stateCode"
                            name="stateCode"
                            value={formData.stateCode}
                            onChange={handleChange}
                            required
                            disabled={!formData.countryCode}
                        >
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state.isoCode} value={state.isoCode}>
                                    {state.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        required
                    />
                    {errors.password && (
                        <div className="error-message password-requirements">
                            <p>Password must contain:</p>
                            {errors.password
                                .split("\n")
                                .filter(Boolean)
                                .map((error, index) => (
                                    <div key={index}>{error}</div>
                                ))}
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        required
                    />
                    {errors.confirmPassword && (
                        <span className="error-message">{errors.confirmPassword}</span>
                    )}
                </div>

                <button type="submit" className="auth-button">
                    Sign Up
                </button>
            </form>

            <p className="auth-toggle">
                Already have an account?
                <button className="toggle-button" onClick={toggleForm}>
                    Sign In
                </button>
            </p>
        </div>
    );
};

export default SignupForm;
