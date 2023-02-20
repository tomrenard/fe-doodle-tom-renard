import styled from "styled-components";

import bg from "../../assets/Body-BG.png";

export const chatInterfaceContainer = styled.section`
  max-width: 800px;
  margin: 1rem auto;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  .logo__container {
    text-align: center;
    background-image: url(${bg});
    background-size: cover;
    img {
      margin: 1rem;
    }
  }
`;
