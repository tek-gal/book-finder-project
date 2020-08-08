import React from 'react';

import EmptyBookListStyles from './EmptyBookList.styles';
import EmptyPNG from "../../../images/empty.png";


const EmptyBookList: React.FC = () => {
  return (
    <EmptyBookListStyles className="book-list--empty">
      <img src={EmptyPNG} alt="ampty-list"/>
      <p>Sorry, no books found :(</p>
    </EmptyBookListStyles>
  );
};

export default EmptyBookList;
