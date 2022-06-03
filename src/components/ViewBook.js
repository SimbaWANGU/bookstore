import React from 'react';
import '../styles/ViewBook.scss';
import BookDetails from './BookDetails';
import CompletionPercentage from './CompletionPercentage';
import Progress from './Progress';

function ViewBook() {
  return (
    <div className="bookContainer">
      <BookDetails />
      <CompletionPercentage />
      <Progress />
    </div>
  );
}

export default ViewBook;
