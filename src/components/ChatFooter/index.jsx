import React, { useState } from "react";
import usePostMessages from "../../hooks/usePostMessages";

export const ChatFooter = () => {
  const [message, setMessage] = useState("");

  const { mutate } = usePostMessages();

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const author = "Tom";
    mutate({ message, author });
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Message:
        <input type="text" value={message} onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  );
};
