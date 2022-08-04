import React from 'react';
import IPaginationButton from '../infostructure/IPaginationButton';
import Button from './Button';

export default function PaginationButtons({ btClass }: IPaginationButton) {
  const pageNum = 1;
  const countPages = 1;
  return (
    <div className={`${btClass}tracs__buttons`}>
      <Button btClass={`${btClass}__prev`} innerStr="prev" active={false} disabled callback={() => console.log('prev')} />
      <div className={`${btClass}__countPages`}>
        {pageNum}
        {' '}
        /
        {' '}
        {countPages}
      </div>
      <Button btClass={`${btClass}__next`} innerStr="next" active disabled={false} callback={() => console.log('next')} />
    </div>
  );
}
