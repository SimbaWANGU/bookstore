import React, { useEffect } from 'react';
import '../styles/BookPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import ViewBook from '../components/ViewBook';
import AddBook from '../components/AddBook';
import { fetchBooks } from '../api/bookstoreAPI';
import { getBook } from '../redux/books/books';

function Book() {
  const books = useSelector((state) => state.allBooks);
  const dispatch = useDispatch();
  let booksFromAPI = [];
  useEffect(() => {
    async function data() {
      booksFromAPI = await fetchBooks();
      dispatch(getBook(booksFromAPI));
    }
    data();
  }, []);

  return (
    <div className="bookSectionContainer">
      {books.map((book) => (
        <ViewBook
          key={book.item_id}
          id={book.item_id}
          author={book.author}
          title={book.title}
          completion={Math.trunc(Math.random() * 100) / 100}
        />
      ))}
      <hr />
      <AddBook />
    </div>
  );
}

export default Book;
