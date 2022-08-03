import React from 'react';
import Button from './Button';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__buttons">
          <Button btClass="button__garage" innerStr="Garage" active />
          <Button btClass="button__winners" innerStr="Winners" active={false} />
        </div>
        <h1>ASYNC RACE</h1>
      </div>

    </header>

  );
}
