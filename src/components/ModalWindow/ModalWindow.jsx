import { CloseIcon } from "../icons/Icons";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../Sections/HomeSection";
import MessagesSection from "../Sections/MessagesSection";
import HelpSection from "../Sections/HelpSection";

const ModalWindow = ({
    toggleModal,
    activeTab,
    setActiveTab,
    faqData,
    messageData,
    helpData,
}) => {
    return (
        <div className="modal-overlay">
            <div className="modal-window">
                <div className="modal-header">
                    <h2 className="modal-title">
                        {activeTab === "home" && "Home"}
                        {activeTab === "messages" && "Messages"}
                        {activeTab === "help" && "Help"}
                    </h2>
                    <button className="close-button" onClick={toggleModal}>
                        <CloseIcon />
                    </button>
                </div>

                <div className="modal-content">
                    {activeTab === "home" && <HomeSection faqData={faqData} />}
                    {activeTab === "messages" && (
                        <MessagesSection messages={messageData} />
                    )}
                    {activeTab === "help" && <HelpSection helpData={helpData} />}
                </div>

                <div className="modal-footer">
                    <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
