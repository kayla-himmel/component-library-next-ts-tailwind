import { DOMAttributes, KeyboardEventHandler, MouseEventHandler } from 'react';

export enum IconTypes {
  ACTIVE = 'active',
  CHEVRON = 'chevron',
  CLOSE = 'close',
  INACTIVE = 'inactive',
  MINUS = 'minus',
  NONE = 'none',
  PLUS = 'plus',
}

export default interface ButtonProps extends DOMAttributes<HTMLButtonElement> {
  onClick: MouseEventHandler<HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLButtonElement>;
  iconType?: IconTypes;
  className?: string;
  disabled?: boolean;
  'data-id'?: string;
}
