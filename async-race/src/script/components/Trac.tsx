import React, { useCallback, useState } from 'react';
import ITrac from '../infostructure/ITrac';
import Button from './Button';

export default function Trac({
  name, deleteCar, id, fill, deleteWinner, setEditCar,
}: ITrac) {
  const [position, setPosition] = useState<number>(0);
  const [widthCar, setWidthCar] = useState<number>(0);
  const [widthTrack, setWidthTrack] = useState<number>(0);
  const [animationId, setAnimationId] = useState<string | number | NodeJS.Timer | undefined>(0);

  const carRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setWidthCar(node.getBoundingClientRect().width);
    }
  }, []);

  const trackRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setWidthTrack(node.getBoundingClientRect().width);
    }
  }, []);

  function startAnimaton() {
    const endAnimation = Math.round(widthTrack) - Math.round(widthCar);
    let start = 0;
    const clearId = setInterval(() => {
      start += 10;
      setPosition((prev) => prev + 10);
      if (start >= endAnimation) {
        clearInterval(clearId);
      }
    }, 16);
    setAnimationId(clearId);
  }

  function stopAnimation() {
    clearInterval(animationId);
    setPosition(0);
  }

  return (
    <div className="trac">
      <div className="trac__buttons">
        <div className="trac__buttonsGroup">
          <Button
            btClass="button__trac"
            innerStr="start"
            active={false}
            disabled={false}
            callback={() => startAnimaton()}
          />
          <Button
            btClass="button__trac"
            innerStr="stop"
            active={false}
            disabled={false}
            callback={() => stopAnimation()}
          />
        </div>
        <div className="trac__buttonsGroup">
          <Button
            btClass="button__trac"
            innerStr="edit"
            active={false}
            disabled={false}
            callback={() => setEditCar(id, name, fill)}
          />
          <Button
            btClass="button__trac"
            innerStr="delete"
            active={false}
            disabled={false}
            callback={() => { deleteCar(id); deleteWinner(id); }}
          />
        </div>
      </div>
      <div ref={trackRef} className="trac__road">
        <p className="nameCar">{ name }</p>
        <div ref={carRef} className="trac__car" style={{ transform: `translateX(${position}px)` }}>
          <svg style={{ fill, width: '150px', height: '50px' }}>
            <use xlinkHref="./sprite.svg#car" />
          </svg>
        </div>
      </div>
    </div>
  );
}
