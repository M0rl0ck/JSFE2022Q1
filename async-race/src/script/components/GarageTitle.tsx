import React from 'react';
import Button from './Button';

export default function GarageTitle() {
  const countCars = 10;
  return (

    <div className="garage__title">
      <div className="createCarButtons">
        <div className="generateButtons">
          <p>
            Cars in garage:
            {countCars}
          </p>
          <Button btClass="button__generateCars" innerStr="Generate 100 cars" active={false} disabled={false} callback={() => console.log('100')} />
        </div>

        <div className="createCar">
          <input type="text" className="inputText" />
          <input type="color" className="inputColor" />
          <Button btClass="button__newCar" innerStr="Create new car" active={false} disabled={false} callback={() => console.log('NEW')} />
        </div>

      </div>

      <div className="startResetButtons">
        <Button btClass="returnCars" innerStr="Reset" active={false} disabled callback={() => console.log('reset')} />
        <Button btClass="startCars" innerStr="Start" active={false} disabled={false} callback={() => console.log('start')} />
      </div>

    </div>
  );
}
