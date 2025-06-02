import { CloseIcon } from "../icons/Icons";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../Sections/HomeSection";
import MessagesSection from "../Sections/MessagesSection";
import HelpSection from "../Sections/HelpSection";
import AuthenticationSection from "../Authentication/AuthenticationSection";

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
    const handleLogin = (data) => {
        console.log("Login successful with:", data);
        setIsLoggedIn(true);
    };

    const handleSignup = (data) => {
        console.log("Signup successful with:", data);
        setIsLoggedIn(true);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-window">
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
