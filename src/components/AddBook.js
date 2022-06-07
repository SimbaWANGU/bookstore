/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/AddBook.scss';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const addBookHandler = (title, author) => {
    if (title === '' && author === '') {
      return 'enter value';
    }
    const newBookObject = {
      id: uuidv4(),
      title,
      author,
      completion: Math.trunc(Math.random() * 100) / 100,
    };
    dispatch(addBook(newBookObject));
    return 'success';
  };

  return (
    <div className="addBookSection">
      <h2>ADD NEW BOOK</h2>
      <form className="addBookForm">
        <input id="title" className="bookTitle" type="text" placeholder="Book Title..." />
        <input id="author" className="bookAuthor" type="text" placeholder="Book Author..." />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addBookHandler(document.getElementById('title').value, document.getElementById('author').value);
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
          }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
