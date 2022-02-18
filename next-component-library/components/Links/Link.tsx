import React from 'react';
import Link from 'next/link';
import LinkComponentProps, { LinkTypes } from './Link.interfaces';

export const LinkComponent: React.FC<LinkComponentProps> = ({
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
