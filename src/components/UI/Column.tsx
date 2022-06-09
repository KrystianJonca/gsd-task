import React from 'react';
import classes from './Column.module.css';

interface ColumnProps {
  readonly children: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ children }) => {
  return <div className={classes.column}>{children}</div>;
};

export default Column;
