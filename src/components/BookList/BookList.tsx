import React from 'react';

import Book from '../../types/Book';
import { BookListStyles } from './BookList.styles'
import { BookListProps } from './BookList.types'
import BookCard from './BookCard/BookCard';
import EmptyBookList from './EmptyBookList/EmptyBookList';


const BookList: React.FC<BookListProps> = () => {
  const books: Book[] = [
    {
      _id: 'sdfsdfsdfsdf',
      title: 'book title 1',
      coverage: 'https://images.unsplash.com/photo-1595836212526-dd08136c4b0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      author: 'book author',
      year: 1196,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore quasi numquam mollitia error qui dignissimos voluptas enim quibusdam itaque laudantium, minima ullam magni quisquam aliquid, fugit tempore laborum debitis!',
    },
    {
      _id: 'sdfsdfsdfq3q',
      title: 'book title 1',
      coverage: 'https://images.unsplash.com/photo-1595836212526-dd08136c4b0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      author: 'book author',
      year: 1196,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore quasi numquam mollitia error qui dignissimos voluptas enim quibusdam itaque laudantium, minima ullam magni quisquam aliquid, fugit tempore laborum debitis!',
    },
    {
      _id: 'sdfsdfsdfSDFAASAq3q',
      title: 'book title 1',
      coverage: 'https://images.unsplash.com/photo-1595836212526-dd08136c4b0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      author: 'book author',
      year: 1196,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore quasi numquam mollitia error qui dignissimos voluptas enim quibusdam itaque laudantium, minima ullam magni quisquam aliquid, fugit tempore laborum debitis!',
    },
    {
      _id: 'sdfsdfsdfASFAFSq3q',
      title: 'book title 1',
      coverage: 'https://images.unsplash.com/photo-1595836212526-dd08136c4b0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      author: 'book author',
      year: 1196,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore quasi numquam mollitia error qui dignissimos voluptas enim quibusdam itaque laudantium, minima ullam magni quisquam aliquid, fugit tempore laborum debitis!',
    },
  ];

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
