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
