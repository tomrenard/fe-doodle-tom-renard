import React, { useEffect, useRef } from "react";
import useFetchMessages from "../../hooks/useFetchMessages";
import { formatDate } from "../../utils/utils";
import * as S from "./styles";

export const ChatBody = () => {
  const bottomRef = useRef(null);
  const { data: messages, isLoading } = useFetchMessages();

  let user = "Tom";

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [messages]);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <S.chatBodyContainer tabIndex={0}>
      {messages?.map(({ _id: id, message, author, timestamp: date }) => (
        <S.messageContainer
          className={`${author === `${user}` ? "self" : "guest"}`}
          key={id}
        >
          <div className="message__content">
            {author !== `${user}` && (
              <div className="message__author">{author}</div>
            )}
            <div className="message__text">{message}</div>
            <div className="message__date">{formatDate(date)}</div>
          </div>
        </S.messageContainer>
      ))}
      <div ref={bottomRef} />
    </S.chatBodyContainer>
  );
};
