import React from 'react';
import IMain from '../infostructure/IMain';
import Garage from './Garage';
import Winners from './Winners';

export default function Main({ page }: IMain) {
  return (
    <main className="main">
      <Garage addClass={page === 'garage' ? '' : 'hide'} />
      <Winners addClass={page === 'winners' ? '' : 'hide'} />
    </main>
  );
}
