import { v4 as uuidv4 } from 'uuid';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer
export default function bookReducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state, {
        id: action.id,
        category: action.category,
        title: action.title,
        author: action.author,
        completion: action.completion,
      }];
    }
    case REMOVE_BOOK: {
      const newState = state.filter((book) => book.id !== action.id);
      return newState;
    }
    default: {
      return state;
    }
  }
}

// Action Creators
export function addBook({ book }) {
  return {
    type: ADD_BOOK,
    id: uuidv4(),
    ...book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}
