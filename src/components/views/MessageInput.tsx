
const MessageInput = () => {
  return (
    <div>
      <label htmlFor="message">
        Message <span>*</span>
      </label>
      <textarea name="message" id="message" required></textarea>
    </div>
  );
};

export default MessageInput;