import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { BookList } from '../components';
import { RootState } from '../store';


const mapProps = (state: RootState) => ({
    books: state?.books?.books,
    loading: state?.books?.loading,
});
const connector = connect(mapProps, null);

type ContainerProps = ConnectedProps<typeof connector>;

const BookListContainer: React.FC<ContainerProps> = ({ books, loading }) => (
    <BookList books={books} loading={loading} />
);

export default connector(BookListContainer);

