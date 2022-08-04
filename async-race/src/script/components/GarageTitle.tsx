import React from 'react';
import Button from './Button';

export default function GarageTitle() {
  const countCars = 10;
  return (

    <div className="garage__title">
      <div className="geterateButtons">
        <p>
          Cars in garage:
          {countCars}
        </p>
        <Button btClass="generateCars" innerStr="Generate 100 cars" active disabled={false} callback={() => console.log('100')} />
      </div>

      <div className="createCar">
        <input type="text" className="inputText" />
        <input type="color" />
        <Button btClass="button__newCar" innerStr="Create new car" active disabled={false} callback={() => console.log('NEW')} />
      </div>

      <div className="startResetButtons">
        <Button btClass="returnCars" innerStr="Reset" active disabled callback={() => console.log('reset')} />
        <Button btClass="startCars" innerStr="Start" active disabled={false} callback={() => console.log('start')} />
      </div>

    </div>
  );
}
