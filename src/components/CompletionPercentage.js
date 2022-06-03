import React from 'react';
import '../styles/CompletionPercentage.scss';
import CompletionPercentageCircle from './CompletionPercentageCircle';

function CompletionPercentage() {
  const percentageCompletion = 0.3;
  return (
    <div className="percentageCompletionContainer">
      <CompletionPercentageCircle
        className="circle"
        completion={percentageCompletion}
      />
      <div className="numericValueContainer">
        <h2>
          {percentageCompletion * 100}
          %
        </h2>
        <p>Completed</p>
      </div>
    </div>
  );
}

export default CompletionPercentage;
