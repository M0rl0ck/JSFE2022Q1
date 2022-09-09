import React, { useState } from 'react';
import IGarageTitie from '../infostructure/IGarageTitel';
import Button from './Button';
import { CARSMODEL, CARSNAME, DEFAULTCAR } from '../constants/constants';
import connector from './Connector';
import ICar from '../infostructure/ICar';

export default function GarageTitle({ countCars, callback, addGarageCar }: IGarageTitie) {
  const [imputName, setImputName] = useState<string>(DEFAULTCAR.name);
  const [imputColor, setImputColor] = useState<string>(DEFAULTCAR.color);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  async function createNewCar(name: string, color: string): Promise<void> {
    const car: ICar = { name, color };
    await connector.createCar(car);
    if (!isEdit) {
      addGarageCar();
      callback();
    }
  }

  async function createCars(): Promise<void> {
    for (let i = 0; i < 100; i += 1) {
      const color = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`;
      const name = `${CARSNAME[Math.floor(Math.random() * CARSNAME.length)]
      } ${CARSMODEL[Math.floor(Math.random() * CARSMODEL.length)]}`;
      createNewCar(name, color);
    }
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
            callback={() => createCars()}
          />
        </div>

        <div className="createCar">
          <input
            type="text"
            className="inputText"
            value={imputName}
            onChange={(e) => setImputName(e.target.value)}
          />
          <input
            type="color"
            className="inputColor"
            value={imputColor}
            onChange={(e) => setImputColor(e.target.value)}
          />
          <Button
            btClass="button__newCar"
            innerStr={isEdit ? 'Edit car' : 'Create new car'}
            active={false}
            disabled={false}
            callback={() => createNewCar(imputName, imputColor)}
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
          callback={() => setIsEdit(!isEdit)}
        />
      </div>
    </div>
  );
}
