import React from 'react';
import '../styles/BookDetails.scss';

function BookDetails() {
  return (
    <div className="bookDetailsContainer">
      <p className="genre">Action</p>
      <h1 className="title">The Hunger Games</h1>
      <p className="author">Suzanne Collins</p>
      <ul className="interactions">
        <li className="interactionItem"><a href="/#">Comments</a></li>
        <hr className="lineBreak" />
        <li className="interactionItem"><a href="/#">Remove</a></li>
        <hr className="lineBreak" />
        <li className="interactionItem"><a href="/#">Edit</a></li>
      </ul>
    </div>
  );
}

export default BookDetails;
