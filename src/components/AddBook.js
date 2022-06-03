import React from 'react';
import '../styles/AddBook.scss';

function AddBook() {
  return (
    <div className="addBookSection">
      <h2>ADD NEW BOOK</h2>
      <form className="addBookForm">
        <input className="bookTitle" type="text" placeholder="Book Title..." />
        <input className="bookAuthor" type="text" placeholder="Book Author..." />
        <button type="button">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
