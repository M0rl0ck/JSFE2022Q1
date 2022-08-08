import React from 'react';
import IWinnerCar from '../infostructure/IWinnerCar';

export default function WinnerCar({
  num, fill, name, wins, time,
}: IWinnerCar) {
  return (
    <>
      <div className="winners__number">{num}</div>
      <div className="winners__img">
        <svg style={{ fill, width: '150px', height: '50px' }}>
          <use xlinkHref="./sprite.svg#car" />
        </svg>
      </div>
      <div className="winners__name">{name}</div>
      <div className="winners__wins">{wins}</div>
      <div className="winners__time">{time}</div>
    </>
  );
}
