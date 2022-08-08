import React, { useState } from 'react';
import IPageDisplay from '../infostructure/IPageDisplay';
import GarageTitle from './GarageTitle';
import PaginationButtons from './PaginationButtons';
import Tracs from './Tracs';

export default function Garage({ addClass }: IPageDisplay) {
  const [numCars, setNumCards] = useState(1);
  const func = (n: number) => {
    setNumCards(n);
  };

  return (
    <div className={`garage ${addClass}`}>
      <GarageTitle countCars={numCars} callback={func} />
      <Tracs callback={func} />
      <PaginationButtons btClass="tracs" />
    </div>
  );
}
