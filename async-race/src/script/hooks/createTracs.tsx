import { useState, useEffect } from 'react';
import connector from '../components/Connector';
import {
  CARSMODEL, CARSNAME, DEFAULTCAR, LIMITCAR,
} from '../constants/constants';
import ICar from '../infostructure/ICar';

export default function useCreateTracs() {
  const [cars, setCars] = useState<ICar[]>([]);
  const [numPage, setNumPage] = useState<number>(1);
  const [numCars, setNumCars] = useState(1);
  const [imputName, setImputName] = useState<string>(DEFAULTCAR.name);
  const [imputColor, setImputColor] = useState<string>(DEFAULTCAR.color);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editId, setEditId] = useState<number>(0);

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

  async function createNewCar(name: string, color: string): Promise<void> {
    const car: ICar = { name, color };
    await connector.createCar(car);
    if (!isEdit) {
      addGarageCar();
      updateNumCars();
    }
  }

  async function createCars(): Promise<void> {
    for (let i = 0; i < 100; i += 1) {
      const color = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`;
      const name = `${CARSNAME[Math.floor(Math.random() * CARSNAME.length)]
      } ${CARSMODEL[Math.floor(Math.random() * CARSMODEL.length)]}`;
      createNewCar(name, color);
    }
  }

  async function updateCar(id:number, name: string, color: string) {
    await connector.updateCar(id, { name, color });
    setIsEdit(false);
    updateCars();
  }

  function setEditCar(id: number, name: string, color: string): void {
    if (id === editId) {
      setIsEdit(!isEdit);
    } else {
      setIsEdit(true);
    }
    setEditId(id);
    setImputName(name);
    setImputColor(color);
  }

  async function deleteCar(id: number): Promise<void> {
    await connector.deleteCar(id);
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
  });
}
