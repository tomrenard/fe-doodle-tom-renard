import React, { useEffect, useRef } from "react";
import useFetchMessages from "../../hooks/useFetchMessages";
import { formatDate } from "../../utils/utils";
import * as S from "./styles";

export const ChatBody = () => {
  const bottomRef = useRef(null);
  const { data: messages, isLoading } = useFetchMessages();

  let user = "Tom";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <S.chatBodyContainer>
      {messages?.map(({ _id, message, author, timestamp: date }) => (
        <div
          className={`message${author === `${user}` ? "__self" : "__guest"}`}
          key={_id}
        >
          <div className="message__container">
            {author !== `${user}` && (
              <div className="message__author">{author}</div>
            )}
            <div className="message__text">{message}</div>
            <div className="message__date">{formatDate(date)}</div>
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </S.chatBodyContainer>
  );
};
