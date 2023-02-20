import React, { useState } from "react";
import usePostMessages from "../../hooks/usePostMessages";
import * as S from "./styles";

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
    <S.chatFooterContainer tabindex="0">
      <S.formChat onSubmit={handleSubmit}>
        <label htmlFor="message">
          <S.messageInput
            placeholder="Message"
            type="text"
            value={message}
            onChange={handleChange}
          />
        </label>
        <S.submitMessageInput type="submit" />
      </S.formChat>
    </S.chatFooterContainer>
  );
};
