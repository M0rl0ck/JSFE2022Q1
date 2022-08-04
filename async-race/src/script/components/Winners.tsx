import React from 'react';
import PaginationButtons from './PaginationButtons';

export default function Winners() {
  const countWinners = 1;
  return (
    <div className="winners">
      <h2>Winners</h2>
      <div className="winners__container">
        <p>
          {'Total winners: '}
          {countWinners}
        </p>
        <div className="winners__table">
          table
        </div>
        <PaginationButtons btClass="winners" />
      </div>
    </div>
  );
}
