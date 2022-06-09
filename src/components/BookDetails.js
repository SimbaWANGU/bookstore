/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../styles/BookDetails.scss';

function BookDetails({
  title,
  author,
  id,
  category,
}) {
  const dispatch = useDispatch();
  const deleteBookHandler = (id) => {
    dispatch(removeBook(id));
  };
  const selectCategory = () => {
    const random = Math.random();
    if (random < 0.3) {
      return category;
    }
    if (random > 0.3 && random < 0.6) {
      return 'Action';
    }
    return 'Romance';
  };
  const selectedCategory = selectCategory();
  return (
    <div className="bookDetailsContainer">
      <p className="genre">{selectedCategory}</p>
      <h1 className="title">{title}</h1>
      <p className="author">{author}</p>
      <ul className="interactions">
        <li className="interactionItem">
          <button
            type="button"
            onClick={() => {
              deleteBookHandler(id);
            }}
          >
            Remove
          </button>
        </li>
        <hr className="lineBreak" />
        <li className="interactionItem"><button type="button">Comment</button></li>
        <hr className="lineBreak" />
        <li className="interactionItem"><button type="button">Edit</button></li>
      </ul>
    </div>
  );
}

export default BookDetails;
