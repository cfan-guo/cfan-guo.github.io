import React, { useState } from 'react';
import './History.css';
import * as data from "./Background.json";
import Profile from "./Profile";
import Badges from './Badges';
import About from './About';
import Gallery from './Gallery';
import Resume from './Resume';
import CardModal from './CardModal';

function History() {
  const [displayAbout, setDisplayAbout] = useState(false);
  const [displayCards, setDisplayCards] = useState(true);
  const [displayResume, setDisplayResume] = useState(false);
  
  const emptyCardModal = {
    "info": {
      "heading": "",
      "url": "",
      "date": "",
      "subtitle": "",
      "description": ""
    },
    "src": "",
    "alt": ""
  };
  const [cardModal, setCardModal] = useState(emptyCardModal);
  const [displayModal, setDisplayModal] = useState(false);
  
  const showAbout = () => {
    setDisplayAbout(true);
    setDisplayCards(false);
    setDisplayResume(false);
  };
  const showCards = () => {
    setDisplayAbout(false);
    setDisplayCards(true);
    setDisplayResume(false);
  };
  const showResume = () => {
    setDisplayAbout(false);
    setDisplayCards(false);
    setDisplayResume(true);
  };

  function updateCardModal(card) {
    setCardModal(card);
    setDisplayModal(true);
  }

  function hideModal() {
    setCardModal(emptyCardModal);
    setDisplayModal(false);
  }

  return (
    <div className="history">
      <div className="history__main">
        <div className="history__header">
          <p onClick={showAbout} className={displayAbout ? "history__header_focused" : ""}>About</p>
          <p onClick={showCards} className={displayCards ? "history__header_focused" : ""}>Gallery</p>
          <p onClick={showResume} className={displayResume ? "history__header_focused" : ""}>Resume</p>
        </div>
        <Gallery className="history__gallery" onCardClick={updateCardModal} style={displayCards ? { display: "flex" } : { display: "none" }} />
        <About className="history__about" style={displayAbout ? { display: "block" } : { display: "none" }} />
        <Resume className="history__resume" style={displayResume ? { display: "block" } : { display: "none" }} />
      </div>
      <hr />
      <div className="history__side">
        <div className="history__profile">
          <Profile bio={data.profile.bio} />
          <Badges social={data.profile.social} />
        </div>
        <CardModal card={cardModal} handleModal={hideModal} style={displayModal ? { display: "flex" } : { display: "none" }}/>
      </div>
    </div>
  );
}

export default History;