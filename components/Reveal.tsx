import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = '' }: RevealProps) {
  return (
    <div className={`reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
