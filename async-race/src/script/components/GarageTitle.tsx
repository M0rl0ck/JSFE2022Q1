import React from 'react';
import IGarageTitie from '../infostructure/IGarageTitel';
import Button from './Button';

export default function GarageTitle({
  countCars,
  createCars,
  createNewCar,
  isEdit,
  updateCar,
  editId,
  imputName,
  imputColor,
  setImputName,
  setImputColor,
}: IGarageTitie) {
  // const [imputName, setImputName] = useState<string>(DEFAULTCAR.name);
  // const [imputColor, setImputColor] = useState<string>(DEFAULTCAR.color);

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
            callback={() => {
              if (isEdit) {
                updateCar(editId, imputName, imputColor);
              } else { createNewCar(imputName, imputColor); }
            }}
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
