import styled from 'styled-components';

import { BackgroundProps } from './Background.types';


export const BackgroundStyles = styled.div<BackgroundProps>`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
`;
