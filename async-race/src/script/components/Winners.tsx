import React from 'react';
import { IWinnerPageDisplay } from '../infostructure/IPageDisplay';
// import connector from './Connector';
import PaginationButtons from './PaginationButtons';
import WinnerCar from './WinnerCar';
import WinnersCarTitle from './WinnersCarTitle';
// import { LIMITCAR } from '../constants/constants';
// import IWinnerCar from '../infostructure/IWinnerCar';
// import getWinnersProp from '../functions/getWinnersProp';

export default function Winners({
  addClass, countWinners, wins, numWinnerPage,
}: IWinnerPageDisplay) {
  // const [countWinners, setCountWinners] = useState(1);
  // const [wins, setWins] = useState<IWinnerCar[]>([]);
  // const numPage = 1;

  // async function getWinnersCars(): Promise<void> {
  //   const { items, count } = await connector.getWinnersCar(numPage, LIMITCAR.wins);
  //   setCountWinners(Number(count));
  //   const winners = getWinnersProp(items, numPage);
  //   setWins(winners);
  // }

  // useEffect(() => {
  //   getWinnersCars();
  // }, []);

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
        <PaginationButtons btClass="winners" numPage={numWinnerPage} countCars={countWinners} setNumPage={() => console.log('1')} />
      </div>
    </div>
  );
}
