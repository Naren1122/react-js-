import { useState, useRef } from "react";

export default function MessageBoard() {
  const [messages, setMessages] = useState("");
  const buttonRef = useRef(null);

  const buttonfunction = () => {
    setMessages("");
    buttonRef.current.focus();
  };

  return (
    <div>
      <input
        ref={buttonRef}
        type="text"
        value={messages}
        onChange={(e) => setMessages(e.target.value)}
      />
      <button onClick={buttonfunction}>Clear and Start Over</button>
    </div>
  );
}
