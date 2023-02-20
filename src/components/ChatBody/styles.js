import styled from "styled-components";

import bg from "../../assets/Body-BG.png";

export const chatBodyContainer = styled.div`
  background-image: url(${bg});
  background-size: cover;
  overflow-y: scroll;
  max-height: 600px;
  .message {
    &__container {
      max-width: 420px;
      border: 1px solid var(--grey);
      padding: 16px;
    }
    &__self,
    &__guest {
      display: flex;
      padding: 8px;
    }
    &__self {
      justify-content: end;
      .message__container {
        background-color: var(--yellow);
      }
    }
    &__guest {
      .message__container {
        background-color: var(--white);
      }
    }
    &__author,
    &__date {
      color: var(--grey);
    }
  }
`;

export const messageContainer = styled.div``;
