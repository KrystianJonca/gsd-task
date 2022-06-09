import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import classes from './Pagination.module.css';

interface PaginationProps {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  nextPage,
  prevPage,
}) => {
  return (
    <div>
      <button onClick={prevPage} disabled={page < 1} className={classes.button}>
        <FaArrowLeft />
      </button>
      <span className={classes.page}>{page + 1}</span>
      <button onClick={nextPage} className={classes.button}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
