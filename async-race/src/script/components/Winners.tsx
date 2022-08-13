import React, { useEffect, useState } from 'react';
import IPageDisplay from '../infostructure/IPageDisplay';
import connector from './Connector';
import PaginationButtons from './PaginationButtons';
import WinnerCar from './WinnerCar';
import WinnersCarTitle from './WinnersCarTitle';
import { LIMITCAR } from '../constants/constants';
import IWinnerCar from '../infostructure/IWinnerCar';
import getWinnersProp from '../functions/getWinnersProp';

export default function Winners({ addClass }: IPageDisplay) {
  const [countWinners, setCountWinners] = useState(1);
  const [wins, setWins] = useState<IWinnerCar[]>([]);
  // const [numPage, setNumPage] = useState(1);
  const numPage = 1;
  // setNumPage(1);

  async function getWinnersCars(): Promise<void> {
    const { items, count } = await connector.getWinnersCar(numPage, LIMITCAR.wins);
    setCountWinners(Number(count));
    const winners = getWinnersProp(items, numPage);
    setWins(winners);
  }

  useEffect(() => {
    getWinnersCars();
  }, []);

  return (
    <div className={`winners ${addClass}`}>
      <h2>Winners</h2>
      <div className="winners__container">
        <p>
          {'Total winners: '}
          {countWinners}
        </p>
        <div className="winners__table">
          <WinnersCarTitle />

          {wins.map((win) => (
            <WinnerCar
              num={win.num}
              fill={win.fill}
              name={win.name}
              wins={win.wins}
              time={win.time}
              key={win.id}
            />
          ))}
        </div>
        <PaginationButtons btClass="winners" numPage={numPage} countCars={countWinners} setNumPage={() => console.log('1')} />
      </div>
    </div>
  );
}
