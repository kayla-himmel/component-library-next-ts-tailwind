import React from 'react';
import ButtonProps from './Button.interfaces';

export const Button: React.FC<ButtonProps> = ({ onClick, role, className, children, ...props }) => {
  const buttonStyleByRole =
    role === 'buttonPip'
      ? 'button-pip flex justify-center items-center border-none p-3'
      : 'button flex justify-center items-center px-6 py-2 border rounded hover:bg-gray-100 hover:border-2 hover:border-black hover:font-bold disabled:bg-gray-400 disabled:text-gray-600 disabled:border-gray-400 disabled:border-2 disabled:cursor-none';

  return (
    <button className={`${buttonStyleByRole} & ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
