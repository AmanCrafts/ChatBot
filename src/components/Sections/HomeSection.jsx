import FAQAccordion from "../FAQAccordion/FAQAccordion";
import { ChatbotIcon } from "../icons/Icons";

const HomeSection = ({ faqData }) => {
    return (
        <div className="home-section">
            <h2>Welcome to our support portal!</h2>
            <div className="action-buttons">
                <button className="chatbot-button">
                    <ChatbotIcon />
                    Chat with Bot
                </button>
            </div>
            <div className="faq-section">
                <h3>Recently Asked Questions</h3>
                <FAQAccordion faqs={faqData} />
            </div>
        </div>
    );
};

export default HomeSection;
