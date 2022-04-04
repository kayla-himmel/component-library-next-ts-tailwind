import React from 'react';
import Link from 'next/link';
import LinkStyleProps from './Link.interfaces';

// NextJS Link component and props with 'styleAs' optional property extended (styleAs can be 'button' and 'link')
export const LinkComponent: React.FC<LinkStyleProps> = ({ styleAs, children, ...props }) => {
  return (
    <Link {...props}>
      {styleAs === 'button' ? (
        <a className="flex max-w-max justify-center items-center px-6 py-2 border rounded hover:bg-gray-100 hover:border-2 hover:border-black hover:font-bold disabled:bg-gray-400 disabled:text-gray-600 disabled:border-gray-400 disabled:border-2 disabled:cursor-none">
          {children}
        </a>
      ) : (
        <a className={`link underline hover:font-bold`}>{children}</a>
      )}
    </Link>
  );
};
