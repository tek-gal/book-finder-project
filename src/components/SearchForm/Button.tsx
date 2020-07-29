import React from 'react';

import { ButtonStyles, ButtonProps } from  './Button.styles';

const Button: React.FC<ButtonProps> = ({ onClick }) => {

  return (
    <ButtonStyles onClick={onClick}>Search</ButtonStyles>
  );
};

export default Button;
