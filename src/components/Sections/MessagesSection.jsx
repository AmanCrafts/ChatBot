import MessageList from "../MessageList/MessageList";
import { SendIcon } from "../icons/Icons";

const MessagesSection = ({ messages }) => {
    return (
        <div className="messages-section">
            <h2>Your Conversations</h2>
            <MessageList messages={messages} />
            <div className="message-input-container">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="message-input"
                />
                <button className="send-button">
                    <SendIcon />
                </button>
            </div>
        </div>
    );
};

export default MessagesSection;
