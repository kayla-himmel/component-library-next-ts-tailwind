import React from 'react';
import Link, { LinkProps } from 'next/link';

// NextJS Link component and props
export const LinkComponent: React.FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <Link href={href} {...props}>
      <a className={`underline hover:font-bold`}>{children}</a>
    </Link>
  );
};
