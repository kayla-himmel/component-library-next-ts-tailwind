import React from 'react';
import Link from 'next/link';
import ButtonProps, { LinkTypes } from './Button.interfaces';

export const Button: React.FC<ButtonProps> = ({
  href,
  as,
  children,
  type,
  onClick,
  onKeyDown,
  className,
  disabled = false,
}) => {
  return (
    <Link href={href} as={as}>
      {type === LinkTypes.LINK ? (
        <a className={className}>{children}</a>
      ) : (
        <button role="button" className={className} onClick={onClick} onKeyDown={onKeyDown} disabled={disabled}>
          {children}
        </button>
      )}
    </Link>
  );
};
