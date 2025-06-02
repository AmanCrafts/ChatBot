import { CloseIcon } from "../icons/Icons";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../Sections/HomeSection";
import MessagesSection from "../Sections/MessagesSection";
import HelpSection from "../Sections/HelpSection";
import AuthenticationSection from "../Authentication/AuthenticationSection";

// ModalWindow component is the main container for the chat interface
const ModalWindow = ({
    toggleModal,
    activeTab,
    setActiveTab,
    faqData,
    messageData,
    helpData,
    isLoggedIn,
    setIsLoggedIn,
}) => {
    // Handle successful login
    const handleLogin = (data) => {
        console.log("Login successful with:", data);
        setIsLoggedIn(true);
        // In production: Call authentication API and store JWT token
    };

    // Handle successful signup
    const handleSignup = (data) => {
        console.log("Signup successful with:", data);
        setIsLoggedIn(true);
        // In production: Call registration API and store JWT token
    };

    return (
        <div className="modal-overlay">
            <div className="modal-window">
                {/* Header with dynamic title based on current section */}
                <div className="modal-header">
                    <h2 className="modal-title">
                        {!isLoggedIn ? (
                            "Authentication"
                        ) : (
                            <>
                                {activeTab === "home" && "Home"}
                                {activeTab === "messages" && "Messages"}
                                {activeTab === "help" && "Help"}
                            </>
                        )}
                    </h2>
                    <div className="header-actions">
                        {/* Temporary logout button for testing - Replace with real logout in production */}
                        {isLoggedIn && (
                            <button
                                className="logout-button"
                                onClick={() => setIsLoggedIn(false)}
                                title="Temporary logout for testing"
                            >
                                Logout
                            </button>
                        )}
                        <button className="close-button" onClick={toggleModal}>
                            <CloseIcon />
                        </button>
                    </div>
                </div>

                {/* Main content area - Shows auth forms or content based on login state */}
                <div className="modal-content">
                    {!isLoggedIn ? (
                        <AuthenticationSection
                            onLogin={handleLogin}
                            onSignup={handleSignup}
                        />
                    ) : (
                        <>
                            {activeTab === "home" && <HomeSection faqData={faqData} />}
                            {activeTab === "messages" && (
                                <MessagesSection messages={messageData} />
                            )}
                            {activeTab === "help" && <HelpSection helpData={helpData} />}
                        </>
                    )}
                </div>

                {/* Navigation footer - Only visible when logged in */}
                {isLoggedIn && (
                    <div className="modal-footer">
                        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalWindow;
