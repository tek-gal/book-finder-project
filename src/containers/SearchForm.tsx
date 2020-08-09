import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { booksActions } from '../store/books';
import { SearchForm } from '../components';


const mapDispatch = {
    searchBooks: booksActions.searchBooks,
};

const connector = connect(null, mapDispatch);
type ContainerProps = ConnectedProps<typeof connector>;

const SearchFormContainer: React.FC<ContainerProps> = ({ searchBooks }) => (
    <SearchForm searchBooks={searchBooks} />
);

export default connector(SearchFormContainer);