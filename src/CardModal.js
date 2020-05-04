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
        <a href="#"><FeatherIcon className="cardmodal__x" icon="x" onClick={hideModal} /></a>
        <img className="cardmodal__img" alt={card.alt} src={card.src} />
        <div className="cardmodal__text">
          <p><a href={card.info.url}>{card.info.heading}</a></p>
          <p>{card.info.date}</p>
          <p>{card.info.subtitle}</p>
          <p>{card.info.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardModal;