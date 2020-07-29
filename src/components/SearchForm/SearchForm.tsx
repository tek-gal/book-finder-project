import React from 'react';

import Input from './Input';
import Button from './Button';
import { SearchFormStyles } from './SearchForm.styles';

type Props = {};

const SearchForm: React.FC<Props> = () => {
  const onSearch = (e: React.MouseEvent<HTMLButtonElement>): void => {};

  return (
    <SearchFormStyles>
      <Input />
      <Button onClick={onSearch} />
    </SearchFormStyles>
  );
};


export default SearchForm;
