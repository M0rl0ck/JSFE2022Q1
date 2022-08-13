import React from 'react';
import { IButton } from '../infostructure/IButton';

export default function Button({
  btClass, innerStr, active, disabled, callback,
}: IButton) {
  return (
    <button
      type="button"
      className={active ? `button ${btClass} active` : `button ${btClass}`}
      disabled={disabled}
      onClick={callback}
    >
      {innerStr}
    </button>
  );
}
