import { combineReducers, createStore } from 'redux';
import allBooksReducer from './books/books';
import categoryReducer from './categories/categories';
import books from './data';

const reducers = combineReducers({
  allBooks: allBooksReducer,
  allCategories: categoryReducer,
});

const store = createStore(
  (state, action) => reducers(state, action),
  books,
);

export default store;
