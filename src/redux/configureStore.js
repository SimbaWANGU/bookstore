import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import allBooksReducer from './books/books';
import categoryReducer from './categories/categories';

const allReducers = combineReducers({
  allBooks: allBooksReducer,
  allCategories: categoryReducer,
});

const store = createStore(
  allReducers,
  applyMiddleware(thunk),
);

export default store;
