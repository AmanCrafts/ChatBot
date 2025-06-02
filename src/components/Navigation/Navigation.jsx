import { HomeIcon, MessagesIcon, HelpIcon } from "../icons/Icons";

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bottom-navigation">
      <button
        className={`nav-item ${activeTab === "home" ? "active" : ""}`}
        onClick={() => setActiveTab("home")}
        title="Home"
      >
        <HomeIcon />
        <span className="nav-tooltip">Home</span>
      </button>
      <button
        className={`nav-item ${activeTab === "messages" ? "active" : ""}`}
        onClick={() => setActiveTab("messages")}
        title="Messages"
      >
        <MessagesIcon />
        <span className="nav-tooltip">Messages</span>
      </button>
      <button
        className={`nav-item ${activeTab === "help" ? "active" : ""}`}
        onClick={() => setActiveTab("help")}
        title="Help"
      >
        <HelpIcon />
        <span className="nav-tooltip">Help</span>
      </button>
    </div>
  );
};

export default Navigation;
