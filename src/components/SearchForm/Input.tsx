import React from 'react';

import { InputProps, InputStyles } from './Input.styles';


const Input: React.FC<InputProps> = () => {
  return (
    <InputStyles type="text" placeholder="Input some book..."/>
  )
};

export default Input;
