import React from 'react';
import Button from './Button';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__buttons">
          <Button btClass="button__garage" innerStr="Garage" active disabled callback={() => console.log('garage')} />
          <Button btClass="button__winners" innerStr="Winners" active={false} disabled={false} callback={() => console.log('winners')} />
        </div>
        <h1>ASYNC RACE</h1>
      </div>

    </header>

  );
}
