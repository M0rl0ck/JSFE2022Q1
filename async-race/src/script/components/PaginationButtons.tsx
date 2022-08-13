import React from 'react';
import { LIMITCAR } from '../constants/constants';
import IPaginationButton from '../infostructure/IPaginationButton';
import Button from './Button';

export default function PaginationButtons({
  btClass, numPage, countCars, setNumPage,
}: IPaginationButton) {
  const countPages = Math.ceil(countCars / LIMITCAR.cars);
  const isPrev = numPage <= 1;
  const isNext = numPage >= countPages;

  function nextPages(): void {
    setNumPage(numPage + 1);
  }
  function prevPages(): void {
    setNumPage(numPage - 1);
  }

  return (
    <div className={`${btClass}__buttons`}>
      <div className="pagination__buttons">
        <Button btClass={`${btClass}__prev`} innerStr="prev" active={false} disabled={isPrev} callback={() => prevPages()} />
        <div className={`${btClass}__countPages`}>
          {numPage}
          {' '}
          /
          {' '}
          {countPages}
        </div>
        <Button btClass={`${btClass}__next`} innerStr="next" active={false} disabled={isNext} callback={() => nextPages()} />
      </div>

    </div>
  );
}
