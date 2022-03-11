import { Button } from './Button';
import { LinkTypes, ButtonIconProps } from './Button.interfaces';

export const ButtonIcon = ({ onClick, disabled, href, id, className, children }: ButtonIconProps) => {
  return (
    <Button
      type={LinkTypes.BUTTON}
      href={href}
      id={id}
      className={`border-0 flex items-center px-3 py-3 w-11 h-11 sm:w-12 sm:h-12 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
