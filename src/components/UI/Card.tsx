import React from 'react';
import classes from './Card.module.css';

interface CardProps {
  img: string;
  title: string;
  desc?: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ img, title, desc, link }) => {
  return (
    <div className={classes.card}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      {desc && <p>{desc}</p>}
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          GitHub Link
        </a>
      )}
    </div>
  );
};

export default Card;
