import React from 'react';
import { DEFAULTCAR } from '../constants/constants';
import ITracs from '../infostructure/ITracs';
import Trac from './Trac';

export default function Tracs({
  cars, deleteCar, deleteWinner, setEditCar,
}: ITracs) {
  return (
    <div className="tracs__container">
      { cars.map((car) => (
        <Trac
          name={car.name ? car.name : DEFAULTCAR.name}
          fill={car.color ? car.color : DEFAULTCAR.color}
          deleteCar={deleteCar}
          id={car.id ? car.id : DEFAULTCAR.id}
          key={car.id}
          deleteWinner={deleteWinner}
          setEditCar={setEditCar}
        />
      )) }
    </div>
  );
}
