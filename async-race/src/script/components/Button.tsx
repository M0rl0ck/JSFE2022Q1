import React from 'react';
import { IButton } from '../constants/intrface';

export default function button({ btClass, innerStr, active }: IButton) {
  // const [isActive, setIsActive] = useState({ active });
  return (
    <button
      type="button"
      className={active ? `button ${btClass} active` : `button ${btClass}`}
      disabled={!!active}
    >
      {innerStr}
    </button>
  );
}
