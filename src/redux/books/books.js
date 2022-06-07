// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Action Creators
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
export default function allBooksReducer(state = {}, action) {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state, action.payload];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.payload);
    }
    default: {
      return state;
    }
  }
}
