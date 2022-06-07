/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/ViewBook.scss';
import BookDetails from './BookDetails';
import CompletionPercentage from './CompletionPercentage';
import Progress from './Progress';

function ViewBook({
  id,
  author,
  title,
  completion,
}) {
  return (
    <div className="bookContainer">
      <BookDetails title={title} author={author} id={id} />
      <CompletionPercentage completion={completion} />
      <Progress />
    </div>
  );
}

export default ViewBook;
