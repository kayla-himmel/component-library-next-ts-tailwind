import React from 'react';

export const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonClass = `button flex justify-center items-center px-6 py-2 border rounded hover:bg-gray-100 hover:border-2 hover:border-black hover:font-bold disabled:bg-gray-400 disabled:text-gray-600 disabled:border-gray-400 disabled:border-2 disabled:cursor-none disabled:font-normal ${className}`;

  return (
    <button type={props.type || 'button'} className={buttonClass} {...props}>
      {children}
    </button>
  );
};
