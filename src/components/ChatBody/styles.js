import styled from "styled-components";

import bg from "../../assets/Body-BG.png";

export const chatBodyContainer = styled.div`
  background-image: url(${bg});
  background-size: cover;
  overflow-y: scroll;
  max-height: 600px;
`;

export const messageContainer = styled.div`
  display: flex;
  padding: 8px;
  .message {
    &__content {
      border-radius: 4px;
      max-width: 420px;
      border: 1px solid var(--grey);
      padding: 16px;
    }
    &__author,
    &__text {
      margin-bottom: 4px;
    }
    &__author,
    &__date {
      color: var(--grey);
    }
  }
  &.self {
    justify-content: end;
    .message__content {
      background-color: var(--yellow);
    }
    .message__date {
      text-align: right;
    }
  }
  &.guest {
    .message__content {
      background-color: var(--white);
    }
  }
`;
