import styled from "styled-components";

export const LinksPageContainer = styled.div`
  display: flex;
  margin: 16px 16px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PageLeftContent = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  @media only screen and (max-width: 1280px) {
    width: 40%;
  }
`;

export const PageRightContent = styled.section`
  display: flex;
  position: relative;
  width: 50%;
  @media screen and (max-width: 768px) {
    transform: translate(-25%, 0);
  }
`;
