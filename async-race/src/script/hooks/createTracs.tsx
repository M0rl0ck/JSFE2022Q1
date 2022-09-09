import { useState, useEffect } from 'react';
import connector from '../components/Connector';
import { LIMITCAR } from '../constants/constants';
import ICar from '../infostructure/ICar';
// import IUseCreateTracs from '../infostructure/IUseCreateTracs';

export default function useCreateTracs() {
  const [cars, setCars] = useState<ICar[]>([]);
  const [numPage, setNumPage] = useState<number>(1);
  const [numCars, setNumCars] = useState(1);

  const updateNumCars = (n?: number): void => {
    if (!n) {
      setNumCars((prev) => prev + 1);
    } else if (n < 0) {
      setNumCars((prev) => prev - 1);
    } else {
      setNumCars(n);
    }
  };

  async function updateCars(): Promise<void> {
    const { items, count } = await connector.getCars(numPage, LIMITCAR.cars);
    updateNumCars(Number(count));
    setCars(items);
  }
  async function getGarageCars(): Promise<void> {
    updateCars();
  }
  async function addGarageCar(): Promise<void> {
    if (cars.length < LIMITCAR.cars) {
      updateCars();
    }
  }

  async function deleteCar(id: number): Promise<void> {
    await connector.deleteCar(id);
    // await connector.deleteWinnerCar(id);
    updateNumCars(-1);
    setCars((prev) => prev.filter((el) => el.id !== id));
    if (cars.length === 1 && numPage > 1) {
      setNumPage((prev) => prev - 1);
    }
  }

  useEffect(() => {
    getGarageCars();
  }, [numPage]);

  return ({
    cars,
    addGarageCar,
    numPage,
    setNumPage,
    deleteCar,
    numCars,
    updateNumCars,
  });
}
