import React from 'react';

import { BookCardWrapper } from './BookCard.styles';
import BookObject from '../../../types/Book';

export type BookCardProps = {
  book: BookObject;
};



const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { title, coverage, year, author, description } = book;

  return (
    <BookCardWrapper className="book-list__item">
      <div className="book-list__item-coverage">
        <img src={coverage} alt="book-coverage" />
      </div>
      <div className="book-list__item-info">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Year: {year}</p>
        <p>Description: {description}</p>
      </div>
    </BookCardWrapper>
  );
};

export default BookCard;
