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
        <a className={`underline hover:font-bold ${className && className}`}>{children}</a>
      ) : (
        <button
          role="button"
          className={`px-6 py-2 border rounded hover:bg-gray-300 ${className && className}`}
          onClick={onClick}
          onKeyDown={onKeyDown}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </Link>
  );
};
