import { HTMLAttributes } from 'react';

export enum IconTypes {
  ACTIVE = 'active',
  CHEVRON = 'chevron',
  CLOSE = 'close',
  INACTIVE = 'inactive',
  MINUS = 'minus',
  NONE = 'none',
  PLUS = 'plus',
}

export default interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  onKeyDown: () => void;
  iconType?: IconTypes;
  className?: string;
  disabled?: boolean;
}
