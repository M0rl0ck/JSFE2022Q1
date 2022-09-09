import { useEffect, useState } from 'react';
import connector from '../components/Connector';
import { LIMITCAR } from '../constants/constants';
import getWinnersProp from '../functions/getWinnersProp';
import IWinnerCar from '../infostructure/IWinnerCar';

export default function useGetWinners() {
  const [countWinners, setCountWinners] = useState(1);
  const [wins, setWins] = useState<IWinnerCar[]>([]);
  const [numWinnerPage, setNumWinnerPage] = useState(1);

  async function updateWinnersCars(): Promise<void> {
    const { items, count } = await connector.getWinnersCar(numWinnerPage, LIMITCAR.wins);
    setCountWinners(Number(count));
    const winners = getWinnersProp(items, numWinnerPage);
    setWins(winners);
  }

  async function getWinnersCars(): Promise<void> {
    updateWinnersCars();
  }

  async function deleteWinner(id: number): Promise<void> {
    await connector.deleteWinnerCar(id);
    updateWinnersCars();
  }

  useEffect(() => {
    getWinnersCars();
  }, []);

  return ({
    countWinners,
    wins,
    numWinnerPage,
    setNumWinnerPage,
    deleteWinner,
  });
}
