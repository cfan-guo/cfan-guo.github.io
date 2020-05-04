import React from 'react';
import './Card.css';

function Card({ card, onChildClick }) {
  function handleClick() {
    onChildClick(card);
  }

  return (
    <div className="card">
      <img className="card__img" alt={card.alt} src={card.src} info={card.info} onClick={handleClick}/>
    </div>
  );
}

export default Card;