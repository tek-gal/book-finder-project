import React from 'react';

import { BookListStyles } from './BookList.styles'
import { BookListProps } from './BookList.types'
import BookCard from './BookCard/BookCard';
import EmptyBookList from './EmptyBookList/EmptyBookList';
import Loading from './Loading/Loading';


const BookList: React.FC<BookListProps> = ({ books, loading }) => {
  
  if (loading) return <Loading />;

  return (
    <BookListStyles className="book-list">
      {
        books.length === 0
          ? <EmptyBookList />
          : books.map(book => (
            <BookCard key={book._id} book={book} />
          ))
      }
    </BookListStyles>
  );
};

export default BookList;
