import React from 'react';
import Images from "./Images";
import Card from "./Card"

function Gallery({ className, style, onCardClick }) {
  function handleChildClick(card) {
    onCardClick(card);
  }

  const imageCards = Images.map((i) =>
    <Card card={i} onChildClick={handleChildClick} />
  );

  return (
    <div className={className} style={style}>
      {imageCards}
    </div>
  );
}

export default Gallery