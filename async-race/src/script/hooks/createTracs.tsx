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
  async function addGarageCar(car: ICar): Promise<void> {
    if (cars.length < LIMITCAR.cars) {
      console.log(cars);
      setCars((prev) => [...prev, car]);
      updateCars();
      console.log(car);
    }
  }

  useEffect(() => {
    getGarageCars();
  }, []);

  return ({
    cars,
    addGarageCar,
    numPage,
    setNumPage,
  });
}
