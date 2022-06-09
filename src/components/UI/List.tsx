import React from 'react';
import classes from './List.module.css';

interface ListProps {
  readonly children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return <ul className={classes.list}>{children}</ul>;
};

export default List;
