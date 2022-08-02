import React from 'react';
import Button from './Button';

export default function Header() {
  return (
    <>
      <Button btClass="button__garage" innerStr="Garage" active />
      <Button btClass="button__winners" innerStr="Winners" active={false} />
      <h1>ASYNC RACE</h1>
    </>

  );
}
