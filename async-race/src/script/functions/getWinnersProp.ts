import connector from '../components/Connector';
import { DEFAULTCAR, LIMITCAR } from '../constants/constants';
import IWinnerCar from '../infostructure/IWinnerCar';
import IWinnerRequest from '../infostructure/IWinnerRequest';

export default function getWinnersProp(items: IWinnerRequest[], numPage: number) {
  const winners: IWinnerCar[] = [];
  items.map(async (win, index) => {
    const id = win.id ? win.id : DEFAULTCAR.id;
    const cars = await connector.getCar(id);
    const [car] = cars;
    const result: IWinnerCar = {
      id,
      num: (numPage - 1) * LIMITCAR.wins + index + 1,
      fill: car.color || DEFAULTCAR.color,
      name: car.name || DEFAULTCAR.name,
      wins: win.wins || DEFAULTCAR.win,
      time: win.time || DEFAULTCAR.time,
    };
    winners.push(result);
  });
  return winners;
}
