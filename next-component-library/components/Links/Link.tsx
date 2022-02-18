import React from 'react';
import Link from 'next/link';
import LinkComponentProps, { LinkTypes } from './Link.interfaces';

export const LinkComponent: React.FC<LinkComponentProps> = ({ href, as, children, type, onClick, className }) => {
  return (
    <Link href={href} as={as}>
      {type === LinkTypes.LINK ? (
        <a className={className}>{children}</a>
      ) : (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      )}
    </Link>
  );
};
