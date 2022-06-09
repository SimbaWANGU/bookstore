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
  category,
  completion,
}) {
  return (
    <div className="bookContainer animate flip">
      <BookDetails title={title} author={author} id={id} category={category} />
      <CompletionPercentage completion={completion} />
      <Progress />
    </div>
  );
}

export default ViewBook;
