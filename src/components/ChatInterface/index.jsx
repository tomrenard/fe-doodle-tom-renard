import React from "react";
import { ChatBody } from "../ChatBody";
import { ChatFooter } from "../ChatFooter";
import mainLogo from "../../assets/logo.png";
import * as S from "./styles";

export const ChatInterface = () => {
  return (
    <S.chatInterfaceContainer>
      <div className="logo__container">
        <img src={mainLogo} alt="logo" />
      </div>
      <ChatBody />
      <ChatFooter />
    </S.chatInterfaceContainer>
  );
};
