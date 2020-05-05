import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import About from './About';
import './Splash.css';

function Splash() {
  const [splashDisplay, setSplashDisplay] = useState("flex");
  const hideSplash = () => {
    setSplashDisplay("none");
  }

  let splashStyle = {
    backgroundImage: "url(/images/background.jpg)",
    display: `${splashDisplay}`
  };

  return (
    <div className="splash" style={splashStyle} >
      <FeatherIcon className="splash__x" icon="x" onClick={hideSplash} />
      <div className="splash__card">
        <h1>Hi, I'm Fan.</h1>
        <h2>Welcome to my workspace!</h2>
        <About className="splash__about" />
        <p>
          <span role="img" aria-label="door emoji">🚪</span>
          <a href="https://cfanguo.me/vr_portfolio"> Knock to enter in XR </a>
          <span role="img" aria-label="door emoji">🚪</span>
        </p>
        <p className="splash__disclaimer">
          Or, continue to the
          <span className="non_xr" onClick={hideSplash}> non-XR version of this site</span>
        </p>
        .
      </div>
    </div>
  );
}

export default Splash;