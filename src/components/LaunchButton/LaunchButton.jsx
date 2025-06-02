import { ChatbotIcon } from "../icons/Icons";

const LaunchButton = ({ onClick }) => (
    <button className="launch-button" onClick={onClick}>
        <ChatbotIcon />
    </button>
);

export default LaunchButton;
