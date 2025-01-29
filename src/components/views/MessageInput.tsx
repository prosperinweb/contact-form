const MessageInput = () => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="message">
        Message <span className="text-green-600">*</span>
      </label>
      <textarea
        className="border border-green-600 rounded-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-600 input:user-valid:border-red-600 transition-all duration-200"
        name="message"
        id="message"
        required
        rows={4}
      ></textarea>
    </div>
  );
};

export default MessageInput;
