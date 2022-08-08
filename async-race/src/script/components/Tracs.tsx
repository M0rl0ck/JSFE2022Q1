import React, { useEffect, useState } from 'react';
import ICar from '../infostructure/ICar';
import connector from './Connector';
import Trac from './Trac';

export default function Tracs() {
  const [cars, setCars] = useState<ICar[]>([]);
  async function getGarageCars(): Promise<void> {
    const { items } = await connector.getCars(1, 7);
    setCars(items);
  }

  useEffect(() => { getGarageCars(); }, []);

  return (
    <div className="tracs__container">
      {cars.map((car) => <Trac name={car.name ? car.name : ''} fill={car.color ? car.color : ''} key={car.id} />)}
    </div>
  );
}
