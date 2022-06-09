import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  readonly children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
