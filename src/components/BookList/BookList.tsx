import React from 'react';

import { BookListStyles } from './BookList.styles'
import { BookObject, BookListProps } from './types'
import BookCard from './BookCard/BookCard';
import EmptyBookList from './EmptyBookList/EmptyBookList';


const BookList: React.FC<BookListProps> = () => {
  const books: BookObject[] = [
    // { title: 'wow!' },
  ];

  return (
    <BookListStyles>
      {
        books.length === 0
          ? <EmptyBookList />
          : books.map(book => (
            <BookCard key={book.title} />
          ))
      }
    </BookListStyles>
  );
};

export default BookList;
