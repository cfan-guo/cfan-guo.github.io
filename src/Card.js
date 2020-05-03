import React from 'react';
import './Card.css';

function Card({ image }) {
  // let card = props.card; 
  // when thing is clicked it should create popup with more details

  // onMouseEnter

  // onMouseLeave

  return (
    <div className="card">
      <img className="card__img" alt={image.alt} src={image.src} />
    </div>
  );
}

export default Card;