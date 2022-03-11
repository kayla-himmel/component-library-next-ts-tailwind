import { LinkProps } from 'next/link';
import { HTMLAttributes } from 'react';

export enum LinkTypes {
  BUTTON = 'button',
  LINK = 'link',
}

// export enum IconTypes {
//   CHEVRON = 'chevron',
//   PLUS = 'plus',
//   MINUS = 'minus',
//   CLOSE = 'close',
// }

export default interface ButtonProps extends LinkProps, HTMLAttributes<HTMLButtonElement> {
  type: LinkTypes.BUTTON | LinkTypes.LINK;
  disabled?: boolean;
  ariaExpanded?: boolean;
  id?: string;
}

export interface ButtonIconProps extends ButtonProps {
  onClick: () => void;
  className?: string;
}
