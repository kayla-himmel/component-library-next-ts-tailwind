import { HtmlProps } from 'next/dist/shared/lib/utils';
import { LinkProps } from 'next/link';
import { HTMLAttributes, HTMLProps } from 'react';

export enum LinkTypes {
  BUTTON = 'button',
  LINK = 'link',
  SUBMIT = 'submit',
}

//have button props extend HTML Button Element and NextJS LinkProps - omit the href from LinkProps to have it set to optional
export default interface ButtonProps extends Omit<LinkProps, 'href'>, HTMLAttributes<HTMLButtonElement> {
  type: LinkTypes.BUTTON | LinkTypes.LINK | LinkTypes.SUBMIT;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  onKeyDown?: () => void;
  ariaExpanded?: boolean;
}
