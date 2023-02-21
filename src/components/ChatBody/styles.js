import styled from "styled-components";

export const chatBodyContainer = styled.div`
  overflow-y: scroll;
  max-height: 564px;
  padding-bottom: 8px;
  @media (max-width: 768px) {
    max-height: 80vh;
  }
`;

export const messageContainer = styled.div`
  display: flex;
  padding: 8px;
  margin: auto 16px;
  .message {
    &__content {
      border-radius: 6px;
      border: 1px solid var(--light-grey);
      padding: 16px;
      @media (max-width: 768px) {
        width: 240px;
      }
    }
    &__text {
      color: var(--dark-grey);
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
      max-width: 420px;
    }
    .message__date {
      text-align: right;
    }
  }
  &.guest {
    .message__content {
      background-color: var(--white);
      max-width: 640px;
    }
  }
`;
