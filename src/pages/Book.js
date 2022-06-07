import React from 'react';
import '../styles/BookPage.scss';
import { shallowEqual, useSelector } from 'react-redux';
import ViewBook from '../components/ViewBook';
import AddBook from '../components/AddBook';

function Book() {
  const books = useSelector((state) => state.allBooks, shallowEqual);
  return (
    <div className="bookSectionContainer">
      {books.map((book) => (
        <ViewBook
          key={book.id}
          id={book.id}
          author={book.author}
          title={book.title}
          completion={book.completion}
        />
      ))}
      <hr />
      <AddBook />
    </div>
  );
}

export default Book;
