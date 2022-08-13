import React from 'react';
import IPaginationButton from '../infostructure/IPaginationButton';
import Button from './Button';

export default function PaginationButtons({ btClass, numPage, setNumPage }: IPaginationButton) {
  const countPages = 1;
  return (
    <div className={`${btClass}__buttons`}>
      <div className="pagination__buttons">
        <Button btClass={`${btClass}__prev`} innerStr="prev" active={false} disabled callback={() => console.log('prev')} />
        <div className={`${btClass}__countPages`}>
          {numPage}
          {' '}
          /
          {' '}
          {countPages}
        </div>
        <Button btClass={`${btClass}__next`} innerStr="next" active={false} disabled={false} callback={() => setNumPage(numPage + 1)} />
      </div>

    </div>
  );
}
