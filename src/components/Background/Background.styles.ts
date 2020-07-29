import styled from 'styled-components';


export type BackgroundProps = {
  image: string;
};

export const BackgroundStyles = styled.div<BackgroundProps>`
  height: 100vh;
  width: 100vw;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
`;
