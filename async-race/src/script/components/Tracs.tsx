import React from 'react';
import { DEFAULTCAR } from '../constants/constants';
import ITracs from '../infostructure/ITracs';
import Trac from './Trac';

export default function Tracs({ cars }: ITracs) {
  return (
    <div className="tracs__container">
      <button type="button" onClick={() => console.log(`${cars.length}`)}>cars</button>
      { cars.map((car) => (
        <Trac
          name={car.name ? car.name : DEFAULTCAR.name}
          fill={car.color ? car.color : DEFAULTCAR.color}
          key={car.id}
        />
      )) }
    </div>
  );
}
