import React from 'react';
import { DEFAULTCAR } from '../constants/constants';
import useCreateTracs from '../hooks/createTracs';
import ITracs from '../infostructure/ITracs';
import Trac from './Trac';

export default function Tracs({ callback }: ITracs) {
  const { cars } = useCreateTracs({ callback });

  return (
    <div className="tracs__container">
      {cars.map((car) => (
        <Trac
          name={car.name ? car.name : DEFAULTCAR.name}
          fill={car.color ? car.color : DEFAULTCAR.color}
          key={car.id}
        />
      ))}
    </div>
  );
}
