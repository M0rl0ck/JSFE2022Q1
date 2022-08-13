import React, { useState } from 'react';
import useCreateTracs from '../hooks/createTracs';
import IPageDisplay from '../infostructure/IPageDisplay';
import GarageTitle from './GarageTitle';
import PaginationButtons from './PaginationButtons';
import Tracs from './Tracs';

export default function Garage({ addClass }: IPageDisplay) {
  const [numCars, setNumCars] = useState(1);
  const func = (n?: number): void => {
    if (!n) {
      setNumCars((prev) => prev + 1);
    } else if (n < 0) {
      setNumCars((prev) => prev - 1);
    } else {
      setNumCars(n);
    }
  };

  const {
    cars, addGarageCar, numPage, setNumPage, deleteCar,
  } = useCreateTracs({ callback: func });

  return (
    <div className={`garage ${addClass}`}>
      <GarageTitle countCars={numCars} callback={func} addGarageCar={addGarageCar} />
      <Tracs cars={cars} deleteCar={deleteCar} />
      <PaginationButtons btClass="tracs" numPage={numPage} countCars={numCars} setNumPage={setNumPage} />
    </div>
  );
}
