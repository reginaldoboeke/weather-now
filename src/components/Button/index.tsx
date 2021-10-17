import { ButtonHTMLAttributes, ReactNode } from 'react';

import './styles.scoped.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest}>
      {children}
    </button>
  );
}