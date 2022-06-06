import { v4 as uuidv4 } from 'uuid';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state, {
        id: action.id,
        category: action.category,
        title: action.title,
        author: action.author,
      }];
    }
    case REMOVE_BOOK: {
      const newState = state.filter((stat) => stat !== action.payload);
      return newState;
    }
    default: {
      return state;
    }
  }
}

// Action Creators
export function addBook({
  category, title, author,
}) {
  return {
    type: ADD_BOOK,
    id: uuidv4(),
    category,
    title,
    author,
  };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}
