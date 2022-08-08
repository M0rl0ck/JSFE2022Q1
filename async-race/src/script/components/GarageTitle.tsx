import React, { useState } from 'react';
import IGarageTitie from '../infostructure/IGarageTitel';
import Button from './Button';
import { DEFAULTCAR } from '../constants/constants';
import connector from './Connector';
import ICreateCarRequest from '../infostructure/ICreateCarRequest';
import useCreateTracs from '../hooks/createTracs';

export default function GarageTitle({ countCars, callback }: IGarageTitie) {
  const { getGarageCars } = useCreateTracs({ callback });
  const [imputName, setImputName] = useState<string>(DEFAULTCAR.name);
  const [imputColor, setImputColor] = useState<string>(DEFAULTCAR.color);
  async function createNewCar(): Promise<void> {
    const car: ICreateCarRequest = { name: imputName, color: imputColor };
    await connector.createCar(car);
    getGarageCars();
  }
  return (
    <div className="garage__title">
      <div className="createCarButtons">
        <div className="generateButtons">
          <p>
            Cars in garage:
            {countCars}
          </p>
          <Button
            btClass="button__generateCars"
            innerStr="Generate 100 cars"
            active={false}
            disabled={false}
            callback={() => console.log('100')}
          />
        </div>

        <div className="createCar">
          <input
            type="text"
            className="inputText"
            defaultValue={DEFAULTCAR.name}
            onChange={(e) => setImputName(e.target.value)}
          />
          <input
            type="color"
            className="inputColor"
            defaultValue={DEFAULTCAR.color}
            onChange={(e) => setImputColor(e.target.value)}
          />
          <Button
            btClass="button__newCar"
            innerStr="Create new car"
            active={false}
            disabled={false}
            callback={() => createNewCar()}
          />
        </div>
      </div>

      <div className="startResetButtons">
        <Button
          btClass="returnCars"
          innerStr="Reset"
          active={false}
          disabled
          callback={() => console.log('reset')}
        />
        <Button
          btClass="startCars"
          innerStr="Start"
          active={false}
          disabled={false}
          callback={() => console.log('start')}
        />
      </div>
    </div>
  );
}
