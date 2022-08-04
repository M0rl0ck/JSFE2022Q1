import React from 'react';
import PaginationButtons from './PaginationButtons';

export default function Tracs() {
  // const pageNum = 1;
  // const countPages = 1;
  return (
    <div className="tracs">
      <div className="tracs__container">
        <svg style={{ fill: '#ffff00', width: '150px', height: '50px' }}>
          <use xlinkHref="./sprite.svg#car" />
        </svg>
      </div>
      <PaginationButtons btClass="tracs" />
    </div>
  );
}
