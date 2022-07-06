import { LinkProps } from 'next/link';

export default interface LinkStyleProps extends LinkProps {
  styleAs?: 'button' | 'link';
}
