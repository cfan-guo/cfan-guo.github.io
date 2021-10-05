import React from 'react';

function About(props) {
  return (
    <div className={props.className} style={props.style}>
      <p className="about__short">
        I'm a senior software engineer currently working at <a href="https://www.gobble.com/">Gobble</a>.
        Since we're a small team, I've had the chance to work on customer features (protein customizations),
        improve internal processes (reducing weekly menu launch time), fix time-critical bugs and translate
        asks from other teams into beautiful and functional code. Oh yeah, and I've been raising the bar on
        making company-wide presentations more engaging.
      </p>
      <p className="about__short">
        Previously, I was a product-focused web engineer currently working at <a href="https://www.connected.io/">
        Connected</a>. Some of my favourite projects were in areas of data engineering, AR/VR,
        computer aided design, and healthcare.
      </p>
      <p className="about__short">
        I was also a team lead and an engineering manager, and I could totally see myself in that sort of role
        again in the future!
      </p>
      <p className="about__short">
        My very first job was at <a href="https://flipp.com/home"> Flipp</a> to build and deliver
        customized desktop and mobile flyer themes and dynamic content for Canadian and US retailers on Flipp’s
        hosted platform.
      </p>
      <p className="about__long">
        I graduated with a Bachelors of Applied Sciences in Computer Engineering from the University of
        Toronto. During my time there, I was active in many areas of student life: from outreach and dance
        to sports and <a href="http://skulepedia.ca/wiki/Welcome">Skule spirit</a>. I was a residence don
        in my last year at <a href="http://www.newcollege.utoronto.ca/"> New College Residence</a>, and directly
        responsible for the wellbeing of the 40 students on my floor.
      </p>
      <p className="about__long">
        I love being on diverse teams, learning from smart people and being involved in company stuff
        outside of my direct responsibilities. In the past, I've helped out with university recruitment and
        interviewing, and I've given and facilitated talks at company roundtables and technical microlearns.
        I love when people tell me how much fun they had at events I've hosted!
      </p>
      <p className="about__long">
        In my spare time, I like to read about new technologies, cook, and work out in my home gym. I also love
        to travel. My favourite is exploring different markets and trying new foods!
      </p>
      <p className="about__long">
        <span role="img" aria-label="side eyes emoji">👀 </span> 
        Latest project (work in progress): 
        <a href="https://cfanguo.me/vr_portfolio"> VR version </a>
        of this website. 
        <span role="img" aria-label="another side eyes emoji to keep things balanced">👀</span>
      </p>
    </div>
  );
}

export default About;