import React from 'react';
import ITrac from '../infostructure/ITrac';
import Button from './Button';

export default function Trac({ name, fill }: ITrac) {
  return (
    <div className="trac">
      <div className="trac__buttons">
        <div className="trac__buttonsGroup">
          <Button
            btClass="button__trac"
            innerStr="start"
            active={false}
            disabled={false}
            callback={() => console.log('start')}
          />
          <Button
            btClass="button__trac"
            innerStr="stop"
            active={false}
            disabled
            callback={() => console.log('stop')}
          />
        </div>
        <div className="trac__buttonsGroup">
          <Button
            btClass="button__trac"
            innerStr="edit"
            active={false}
            disabled={false}
            callback={() => console.log('edit')}
          />
          <Button
            btClass="button__trac"
            innerStr="delete"
            active={false}
            disabled={false}
            callback={() => console.log('delete')}
          />
        </div>
      </div>
      <div className="trac__road">
        <p className="nameCar">{ name }</p>
        <div className="trac__car">
          <svg style={{ fill, width: '150px', height: '50px' }}>
            <use xlinkHref="./sprite.svg#car" />
          </svg>
        </div>
      </div>
    </div>
  );
}
