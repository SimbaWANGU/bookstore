import { createBook, deleteBook } from '../../api/bookstoreAPI';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const SET_BOOKS = 'bookstore/books/SET_BOOKS';

// Action Creators
export function getBook(book) {
  return {
    type: SET_BOOKS,
    payload: book,
  };
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    payload: id,
  };
}

// Reducer
// const initialBooks = [];
export default function allBooksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK: {
      createBook(action.payload);
      return [...state, action.payload];
    }
    case REMOVE_BOOK: {
      deleteBook(action.payload);
      return state.filter((book) => book.item_id !== action.payload);
    }
    case SET_BOOKS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
