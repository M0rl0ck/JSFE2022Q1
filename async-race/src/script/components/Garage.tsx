import React from 'react';
import { IGaragePageDisplay } from '../infostructure/IPageDisplay';
import GarageTitle from './GarageTitle';
import PaginationButtons from './PaginationButtons';
import Tracs from './Tracs';

export default function Garage({
  addClass,
  cars,
  addGarageCar,
  numPage,
  setNumPage,
  deleteCar,
  numCars,
  updateNumCars,
  deleteWinner,
}: IGaragePageDisplay) {
  return (
    <div className={`garage ${addClass}`}>
      <GarageTitle
        countCars={numCars}
        callback={updateNumCars}
        addGarageCar={addGarageCar}
      />
      <Tracs cars={cars} deleteCar={deleteCar} deleteWinner={deleteWinner} />
      <PaginationButtons
        btClass="tracs"
        numPage={numPage}
        countCars={numCars}
        setNumPage={setNumPage}
      />
    </div>
  );
}
