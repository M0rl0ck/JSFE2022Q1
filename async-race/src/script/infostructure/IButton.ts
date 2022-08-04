// import React from 'react';

export interface IButton {
  btClass: string
  innerStr: string
  active: boolean
  disabled: boolean
  callback(): void
}
