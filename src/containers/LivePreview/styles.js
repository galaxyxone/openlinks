import styled from "styled-components";
import frame from '../../assets/preview-device.svg';

export const DeviceFrame = styled.div`
  display: block;
  height: 724px;
  left: 50%;
  margin: 0 auto;
  padding: 16px;
  position: absolute;
  top: 20%;
  transform-origin: top left;
  scale: 0.75;
  width: 352px;
  &::after {
    background-image: url(${frame});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    inset: -24px;
    pointer-events: none;
    position: absolute;
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -ms-background-size: contain;
    -o-background-size: contain;
  }
`;
