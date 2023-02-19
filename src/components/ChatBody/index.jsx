import React from "react";
import useFetchMessages from "../../hooks/useFetchMessages";

export const ChatBody = () => {
  const { data: messages, isLoading } = useFetchMessages();

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      {messages?.map(({ _id, message }) => (
        <div key={_id}>{message}</div>
      ))}
    </>
  );
};
