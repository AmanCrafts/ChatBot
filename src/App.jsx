import { useState } from "react";
import "./App.css";

// Icon components
const ChatbotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="16" y1="16" x2="16" y2="16" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// LaunchButton component
const LaunchButton = ({ onClick }) => (
  <button className="launch-button" onClick={onClick}>
    <ChatbotIcon />
  </button>
);

// FAQAccordion component
const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span>{openIndex === index ? "−" : "+"}</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

// MessageList component
const MessageList = ({ messages }) => (
  <div className="message-list">
    {messages.map((message, index) => (
      <div
        key={index}
        className={`message ${
          message.sender === "user" ? "user-message" : "system-message"
        }`}
      >
        <div className="message-header">
          <span className="message-sender">{message.senderName}</span>
          <span className="message-time">{message.time}</span>
        </div>
        <div className="message-content">{message.content}</div>
      </div>
    ))}
  </div>
);

// HelpCategoryDropdown component
const HelpCategoryDropdown = ({ category, articles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="help-category">
      <div className="help-category-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{category}</h3>
        <span>{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div className="help-articles">
          {articles.map((article, index) => (
            <div key={index} className="help-article">
              <h4>{article.title}</h4>
              <p>{article.excerpt}</p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// App component
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  // Sample data
  const faqData = [
    {
      question: "How do I reset my password?",
      answer: "Go to login page and click on 'Forgot Password' link.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach us via email at support@example.com or use the chat feature.",
    },
    {
      question: "What are your business hours?",
      answer: "We are available 24/7 for your support needs.",
    },
  ];

  const messageData = [
    {
      sender: "system",
      senderName: "Chatbot",
      time: "10:30 AM",
      content: "Hello! How can I assist you today?",
    },
    {
      sender: "user",
      senderName: "You",
      time: "10:32 AM",
      content: "I need help with my account settings.",
    },
    {
      sender: "system",
      senderName: "Chatbot",
      time: "10:33 AM",
      content: "Sure, what specific setting are you looking for?",
    },
  ];

  const helpData = [
    {
      category: "Getting Started",
      articles: [
        {
          title: "Account Setup",
          excerpt: "Learn how to set up your account for the first time.",
        },
        {
          title: "Navigation Guide",
          excerpt: "How to navigate through our platform efficiently.",
        },
      ],
    },
    {
      category: "Billing",
      articles: [
        {
          title: "Payment Methods",
          excerpt: "Information about the payment options we accept.",
        },
        {
          title: "Subscription Plans",
          excerpt: "Details about our various subscription plans.",
        },
      ],
    },
  ];

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app-container">
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-window">
            <div className="modal-header">
              <div className="tabs">
                <button
                  className={`tab ${activeTab === "home" ? "active" : ""}`}
                  onClick={() => setActiveTab("home")}
                >
                  Home
                </button>
                <button
                  className={`tab ${activeTab === "messages" ? "active" : ""}`}
                  onClick={() => setActiveTab("messages")}
                >
                  Messages
                </button>
                <button
                  className={`tab ${activeTab === "help" ? "active" : ""}`}
                  onClick={() => setActiveTab("help")}
                >
                  Help
                </button>
              </div>
              <button className="close-button" onClick={toggleModal}>
                <CloseIcon />
              </button>
            </div>

            <div className="modal-content">
              {activeTab === "home" && (
                <div className="home-section">
                  <h2>Welcome to our support portal!</h2>
                  <div className="action-buttons">
                    <button className="chatbot-button">
                      <ChatbotIcon />
                      Chat with Bot
                    </button>
                    <button className="primary-button">
                      Join us on a Call
                    </button>
                  </div>
                  <div className="faq-section">
                    <h3>Recently Asked Questions</h3>
                    <FAQAccordion faqs={faqData} />
                  </div>
                </div>
              )}

              {activeTab === "messages" && (
                <div className="messages-section">
                  <h2>Your Conversations</h2>
                  <MessageList messages={messageData} />
                  <div className="message-input-container">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="message-input"
                    />
                    <button className="send-button">Send</button>
                  </div>
                </div>
              )}

              {activeTab === "help" && (
                <div className="help-section">
                  <h2>Help Center</h2>
                  {helpData.map((item, index) => (
                    <HelpCategoryDropdown
                      key={index}
                      category={item.category}
                      articles={item.articles}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <LaunchButton onClick={toggleModal} />
    </div>
  );
}

export default App;