import styled from 'styled-components';


export type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ButtonStyles = styled.button<ButtonProps>`
  cursor: pointer;
  font-size: 14px;
  padding: 10px;
  border: none;
  outline: none;
  color: #fff;
  background-color: #aaf0eb;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 3px;
`;
