/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/CompletionPercentage.scss';
import CompletionPercentageCircle from './CompletionPercentageCircle';

function CompletionPercentage({ completion }) {
  // const percentageCompletion = 0.3;
  return (
    <div className="percentageCompletionContainer">
      <CompletionPercentageCircle
        className="circle"
        completion={completion}
      />
      <div className="numericValueContainer">
        <h2>
          {completion * 100}
          %
        </h2>
        <p>Completed</p>
      </div>
    </div>
  );
}

export default CompletionPercentage;
