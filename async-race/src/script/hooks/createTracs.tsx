import { useState, useEffect } from 'react';
import connector from '../components/Connector';
import { LIMITCAR } from '../constants/constants';
import ICar from '../infostructure/ICar';
import IUseCreateTracs from '../infostructure/IUseCreateTracs';

export default function useCreateTracs({ callback }: IUseCreateTracs) {
  const [cars, setCars] = useState<ICar[]>([]);
  const [numPage, setNumPage] = useState<number>(1);

  async function updateCars(): Promise<void> {
    const { items, count } = await connector.getCars(numPage, LIMITCAR.cars);
    callback(Number(count));
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
    await connector.deleteWinnerCar(id);
    await updateCars();
    console.log(cars.length);
    setTimeout(() => {
      if (!cars.length && numPage > 1) {
        console.log('0');
        setNumPage((prev) => prev - 1);
      }
    }, 0);
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
  });
}
