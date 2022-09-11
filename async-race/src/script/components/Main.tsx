import React from 'react';
import useCreateTracs from '../hooks/createTracs';
import useGetWinners from '../hooks/getWinners';
import IMain from '../infostructure/IMain';
import Garage from './Garage';
import Winners from './Winners';

export default function Main({ page }: IMain) {
  const {
    cars,
    addGarageCar,
    numPage,
    setNumPage,
    deleteCar,
    numCars,
    updateNumCars,
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
  } = useCreateTracs();

  const {
    countWinners,
    wins,
    numWinnerPage,
    deleteWinner,
  } = useGetWinners();

  return (
    <main className="main">
      <Garage
        addClass={page === 'garage' ? '' : 'hide'}
        cars={cars}
        addGarageCar={addGarageCar}
        numPage={numPage}
        setNumPage={setNumPage}
        deleteCar={deleteCar}
        numCars={numCars}
        updateNumCars={updateNumCars}
        deleteWinner={deleteWinner}
        createCars={createCars}
        createNewCar={createNewCar}
        isEdit={isEdit}
        setEditCar={setEditCar}
        updateCar={updateCar}
        editId={editId}
        imputName={imputName}
        imputColor={imputColor}
        setImputName={setImputName}
        setImputColor={setImputColor}
      />
      <Winners
        addClass={page === 'winners' ? '' : 'hide'}
        countWinners={countWinners}
        wins={wins}
        numWinnerPage={numWinnerPage}
      />
    </main>
  );
}
