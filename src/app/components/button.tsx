import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};
