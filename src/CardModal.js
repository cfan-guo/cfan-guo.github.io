import React from 'react';
import FeatherIcon from 'feather-icons-react';
import './CardModal.css';

function CardModal({ card, style, handleModal }) {
  const hideModal = () => {
    handleModal();
  }

  return (
    <div className="cardmodal" style={style}>
      <div className="cardmodal__content">
        <FeatherIcon className="cardmodal__x" icon="x" onClick={hideModal} />
        <img className="cardmodal__img" alt={card.alt} src={card.src} />
        <div className="cardmodal__text">
          <h3><a href={card.info.url}>{card.info.heading}</a></h3>
          <p>{card.info.date}</p>
          <p><strong>{card.info.subtitle}</strong></p>
          <p>{card.info.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardModal;