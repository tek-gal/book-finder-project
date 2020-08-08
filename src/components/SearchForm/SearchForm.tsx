import React, { useState } from 'react';

import Input from './Input/Input';
import Button from './Button/Button';
import { SearchFormStyles } from './SearchForm.styles';

type Props = {};


const SearchForm: React.FC<Props> = () => {
  const [searchRequest, setSearchRequest] = useState<string>(''); 
  const onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement;
    setSearchRequest(target.value);
  };
  const onSearch = (e: React.MouseEvent<HTMLButtonElement>): void => {
    
  };
  
  return (
    <SearchFormStyles>
      <Input value={searchRequest} onChange={onInputChange}/>
      <Button onClick={onSearch} />
    </SearchFormStyles>
  );
};


export default SearchForm;
