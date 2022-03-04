import React from 'react';
import Link from 'next/link';
import ButtonProps, { LinkTypes } from './Button.interfaces';

export const Button: React.FC<ButtonProps> = ({
  href,
  as,
  children,
  type,
  id,
  onClick,
  onKeyDown,
  className,
  disabled = false,
  ariaExpanded,
}) => {
  return (
    <Link href={href} as={as}>
      {type === LinkTypes.LINK ? (
        <a className={`underline hover:font-bold ${className && className}`}>{children}</a>
      ) : (
        <button
          role="button"
          className={`px-6 py-2 border rounded hover:bg-gray-100 hover:border-2 hover:border-black disabled:bg-gray-300 disabled:text-gray-600 disabled:border-gray-300 ${
            className && className
          }`}
          id={id}
          onClick={onClick}
          onKeyDown={onKeyDown}
          disabled={disabled}
          aria-expanded={ariaExpanded}
        >
          {children}
        </button>
      )}
    </Link>
  );
};
