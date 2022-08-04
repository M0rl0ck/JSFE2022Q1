import React, { useState } from 'react';
import IHeadar from '../infostructure/IHeader';
import Button from './Button';

export default function Header({ callback }: IHeadar) {
  const [isActive, setIsActive] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  function setActve() {
    console.log('hi');
    setIsActive((prev) => !prev);
    setIsDisabled((prev) => !prev);
  }
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__buttons">
          <Button btClass="button__garage" innerStr="Garage" active={isActive} disabled={isDisabled} callback={() => { setActve(); callback('garage'); }} />
          <Button btClass="button__winners" innerStr="Winners" active={!isActive} disabled={!isDisabled} callback={() => { setActve(); callback('winners'); }} />
        </div>
        <h1>ASYNC RACE</h1>
      </div>

    </header>

  );
}
