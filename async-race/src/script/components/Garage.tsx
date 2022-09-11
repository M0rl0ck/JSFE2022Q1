import React from 'react';
import { IGaragePageDisplay } from '../infostructure/IPageDisplay';
import GarageTitle from './GarageTitle';
import PaginationButtons from './PaginationButtons';
import Tracs from './Tracs';

export default function Garage({
  addClass,
  cars,
  numPage,
  setNumPage,
  deleteCar,
  numCars,
  deleteWinner,
  createCars,
  createNewCar,
  isEdit,
  setEditCar,
  updateCar,
  editId,
  imputName,
  imputColor,
  setImputName,
  setImputColor,
}: IGaragePageDisplay) {
  return (
    <div className={`garage ${addClass}`}>
      <GarageTitle
        countCars={numCars}
        createCars={createCars}
        createNewCar={createNewCar}
        isEdit={isEdit}
        updateCar={updateCar}
        editId={editId}
        imputName={imputName}
        imputColor={imputColor}
        setImputName={setImputName}
        setImputColor={setImputColor}
      />
      <Tracs
        cars={cars}
        deleteCar={deleteCar}
        deleteWinner={deleteWinner}
        setEditCar={setEditCar}
      />
      <PaginationButtons
        btClass="tracs"
        numPage={numPage}
        countCars={numCars}
        setNumPage={setNumPage}
      />
    </div>
  );
}
