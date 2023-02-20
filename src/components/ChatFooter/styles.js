import styled from "styled-components";

export const chatFooterContainer = styled.div`
  background-color: var(--blue);
  height: 72px;
`;

export const submitMessageInput = styled.input`
  background-color: var(--orange);
  margin: 8px;
  height: 42px;
  padding: 6px;
  border-radius: 4px;
  color: var(--white);
  font-weight: 700;
  cursor: pointer;
`;

export const messageInput = styled.input`
  width: 340px;
  height: 42px;
  padding: 6px;
  border-radius: 4px;
  border: 2px solid var(--dark-blue);
  caret-color: var(--dark-blue);
`;

export const formChat = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
`;
