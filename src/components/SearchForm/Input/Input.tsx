import React from 'react';

import { InputStyles } from './Input.styles';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <InputStyles
      value={value}
      onChange={onChange}
      type="text"
      placeholder="Input some book..."
    />
  )
};

export default Input;
