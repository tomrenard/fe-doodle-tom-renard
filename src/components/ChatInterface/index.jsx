import React from "react";
import { ChatBody } from "../ChatBody";
import { ChatFooter } from "../ChatFooter";
import mainLogo from "../../assets/logo.png";
import * as S from "./styles";

export const ChatInterface = () => {
  return (
    <S.chatInterfaceContainer>
      <div className="chat__header">
        <div className="chat__header-body-container">
          <div className="logo__container">
            <h1>
              <img src={mainLogo} alt="logo" />
            </h1>
          </div>
          <ChatBody />
        </div>
        <ChatFooter />
      </div>
    </S.chatInterfaceContainer>
  );
};
