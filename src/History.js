import React, { useState } from 'react';
import './History.css';
import * as data from "./Background.json";
import Card from "./Card"
import Profile from "./Profile"
import Badges from './Badges'
import Images from "./Images";
import About from './About';
import Resume from './Resume';

function History() {
  const [displayAbout, setDisplayAbout] = useState(false);
  const [displayCards, setDisplayCards] = useState(true);
  const [displayResume, setDisplayResume] = useState(false);
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

  const imageCards = Images.map((i) =>
    <Card image={i} />
  );

  return (
    <div className="history">
      <div className="history__profile">
        <Profile bio={data.profile.bio} />
        <Badges social={data.profile.social} />
        <p>Made with 🥔 in 🇨🇦</p>
      </div>
      <hr />
      <div className="history__main">
        <div className="history__header">
          <p onClick={showAbout} className={displayAbout ? "history__header_focused" : ""}>About</p>
          <p onClick={showCards} className={displayCards ? "history__header_focused" : ""}>Gallery</p>
          <p onClick={showResume} className={displayResume ? "history__header_focused" : ""}>Resume</p>
        </div>
        <div className="history__cards" style={displayCards ? {display:"flex"} : {display:"none"}}>
          {imageCards}
        </div>
        <About className="history__about" style={displayAbout ? {display:"block"} : {display:"none"}} />
        <Resume className="history__resume" style={displayResume ? {display:"block"} : {display:"none"}} />
      </div>

    </div>
  );
}

export default History;