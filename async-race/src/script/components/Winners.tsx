import React from 'react';
import IPageDisplay from '../infostructure/IPageDisplay';
import PaginationButtons from './PaginationButtons';

export default function Winners({ addClass }: IPageDisplay) {
  const countWinners = 1;
  return (
    <div className={`winners ${addClass}`}>
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
