import styled from "styled-components";
import frame from "../../assets/preview-device.svg";

export const DeviceFrame = styled.div`
  display: block;
  height: 724px;
  left: 50%;
  margin: 0 auto;
  padding: 16px;
  font-family: "Urbanist", "Times New Roman", Times, serif !important;
  position: absolute;
  top: 10%;
  scale: 0.85;
  transform-origin: top left;
  width: 352px;
  &::after {
    background-image: url(${frame});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
  }
`;

export const PreviewLinkButton = styled.a`
  align-items: center;
  border-radius: 5px;
  color: ${({ theme }) => theme?.buttons?.textColor ?? "inherit"};
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  justify-content: center;
  margin: 8px 16px;
  min-height: 50px;
  text-decoration: none;
  width: 250px;
  background-color: ${({ theme }) => theme?.buttons?.bgColor ?? "inherit"};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) =>
      theme?.buttons?.bgColorHover ?? "inherit"};
  }
  &:active {
    background-color: ${({ theme }) =>
      theme?.buttons?.bgColorActive ?? "inherit"};
  }
`;

export const PreviewLinksAvatar = styled.img`
  background-color: ${({ theme }) => theme?.buttons?.bgColor ?? "inherit"};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme?.buttons?.bgColor ?? "inherit"};
  height: 128px;
  width: 128px;
`;

export const PreviewLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll; 
`;

export const PreviewScreen = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme?.buttons?.textColor ?? "inherit"};
  background-color: ${({ theme }) => theme.container?.bgColor ?? "inherit"};
  height: 100%;
  padding: 24px;
`;

export const PreviewProfileTitle = styled.h1``;
