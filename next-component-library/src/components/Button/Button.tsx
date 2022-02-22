import React from 'react';
<<<<<<< HEAD:next-component-library/components/Button/Button.tsx
import Link from 'next/Link';
=======
import Link from 'next/link';
>>>>>>> 5fad8a6c9059322010b4f9c9cb057c77d5df97b1:next-component-library/src/components/Button/Button.tsx
import ButtonProps, { LinkTypes } from './Button.interfaces';

export const Button: React.FC<ButtonProps> = ({
  href,
  as,
  children,
  type,
  onClick,
  onKeyDown,
  className = 'font-bold bg-green-100',
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
