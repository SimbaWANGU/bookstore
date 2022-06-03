import React from 'react';
import '../styles/BookPage.scss';
import ViewBook from '../components/ViewBook';
import AddBook from '../components/AddBook';

function Book() {
  return (
    <div className="bookSectionContainer">
      <ViewBook />
      <ViewBook />
      <ViewBook />
      <hr />
      <AddBook />
    </div>
  );
}

export default Book;
