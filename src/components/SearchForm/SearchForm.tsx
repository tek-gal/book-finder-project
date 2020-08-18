import React, { useState } from 'react';

import Input from './Input/Input';
import Button from './Button/Button';
import { SearchFormStyles } from './SearchForm.styles';


type SearchFormProps = {
  searchBooks: (searchRequest: string) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ searchBooks }) => {
  const [searchRequest, setSearchRequest] = useState<string>(''); 
  const onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement;
    setSearchRequest(target.value);
  };
  const onSearch = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    searchBooks(searchRequest);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    searchBooks(searchRequest);
  };

  return (
    <SearchFormStyles onSubmit={onSubmit}>
      <Input value={searchRequest} onChange={onInputChange}/>
      <Button onClick={onSearch} />
    </SearchFormStyles>
  );
};


export default SearchForm;
