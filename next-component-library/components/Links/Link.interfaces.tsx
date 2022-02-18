import { LinkProps } from 'next/link';
import { HTMLAttributes } from 'react';

export enum LinkTypes {
  BUTTON = 'button',
  LINK = 'link',
}

export default interface LinkComponentProps extends LinkProps, HTMLAttributes<HTMLDivElement> {
  type: LinkTypes.BUTTON | LinkTypes.LINK;
  onClick?: () => void;
}
