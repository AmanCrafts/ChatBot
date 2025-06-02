import { useState } from "react";
import "./App.css";

import LaunchButton from "./components/LaunchButton/LaunchButton";
import ModalWindow from "./components/ModalWindow/ModalWindow";

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
        <ModalWindow
          toggleModal={toggleModal}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          faqData={faqData}
          messageData={messageData}
          helpData={helpData}
        />
      )}

      <LaunchButton onClick={toggleModal} />
    </div>
  );
}

export default App;
