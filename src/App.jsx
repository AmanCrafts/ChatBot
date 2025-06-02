import { useState } from "react";
import "./App.css";

import LaunchButton from "./components/LaunchButton/LaunchButton";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
  // State management for the main application
  const [isOpen, setIsOpen] = useState(false);  // Controls modal visibility
  const [activeTab, setActiveTab] = useState("home");  // Tracks active tab in the modal
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Authentication state

  // Sample data for demonstration - Replace with API calls in production
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

  // Toggle modal window visibility - Called when chat button is clicked
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
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}

      <LaunchButton onClick={toggleModal} />
    </div>
  );
}

export default App;
