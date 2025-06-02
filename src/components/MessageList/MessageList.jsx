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

export default MessageList;
