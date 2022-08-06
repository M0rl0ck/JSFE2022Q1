import React from 'react';
import IPageDisplay from '../infostructure/IPageDisplay';
import GarageTitle from './GarageTitle';
import PaginationButtons from './PaginationButtons';
import Tracs from './Tracs';

export default function Garage({ addClass }: IPageDisplay) {
  return (
    <div className={`garage ${addClass}`}>
      <GarageTitle />
      <Tracs />
      <PaginationButtons btClass="tracs" />
    </div>
  );
}
