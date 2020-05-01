import React from 'react';
import './Splash.css';

function Splash() {
    const handleOnClick = () => {
      
    }

    return (
      <div className="splash">
          <div className="splash__card">
        <h1>Hi, I'm Fan.</h1>
        <h2>Welcome to my workspace!</h2>
        <p>
          I'm a product-focused web engineer currently working at <a href="https://www.connected.io/">Connected</a>. 
          My most recent projects are in the areas of in data engineering, virtual and extended reality, computer 
          aided design and healthcare.
        </p>
        <p>
          I'm also a team lead and an engineering manager, facilitating guild
          growth through technical rituals and company-wide socials in addition
          to supporting the individual career growth of my reports.
        </p>
        <p>
          Previously, I worked at 
          <a href="https://flipp.com/home"> Flipp</a> to build and deliver
          customized desktop and mobile flyer themes and dynamic content for
          Canadian and US retailers on Flipp’s hosted platform.
        </p>
        <p>🚪 <a href="room.html">Knock to enter in XR</a> 🚪</p>
        <p className="splash__disclaimer">
          Or, continue to the
          <a id="non_xr" href="#"> non-XR version of this site</a>
        </p>
        .
      </div>
      </div>
    );
  }
  
export default Splash;