export enum IconTypes {
  ACTIVE = 'active',
  CHEVRON = 'chevron',
  CLOSE = 'close',
  INACTIVE = 'inactive',
  MINUS = 'minus',
  NONE = 'none',
  PLUS = 'plus',
}

export default interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconType?: IconTypes;
  className?: string;
  disabled?: boolean;
  'data-id'?: string;
}
