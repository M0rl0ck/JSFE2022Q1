import { useState, useEffect } from 'react';
import connector from '../components/Connector';
import { LIMITCAR } from '../constants/constants';
import ICar from '../infostructure/ICar';
import ITracs from '../infostructure/ITracs';

export default function useCreateTracs({ callback }: ITracs) {
  const [cars, setCars] = useState<ICar[]>([]);
  const numPage = 1;
  async function getGarageCars(): Promise<void> {
    setCars([]);
    const { items, count } = await connector.getCars(numPage, LIMITCAR.cars);
    callback(Number(count));
    setCars(items);
  }

  useEffect(() => {
    getGarageCars();
  }, [callback]);

  return { cars, getGarageCars };
}
