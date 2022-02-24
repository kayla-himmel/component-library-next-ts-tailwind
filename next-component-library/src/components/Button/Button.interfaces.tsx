import { LinkProps } from 'next/link';
import { HTMLAttributes } from 'react';

export enum LinkTypes {
  BUTTON = 'button',
  LINK = 'link',
}

export default interface ButtonProps extends LinkProps, HTMLAttributes<HTMLButtonElement> {
  type: LinkTypes.BUTTON | LinkTypes.LINK;
  disabled?: boolean;
  onClick?: () => void;
  onKeyDown?: () => void;
  ariaExpanded?: boolean;
}
