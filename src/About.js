import React from 'react';

function About(props) {
  return (
    <div className={props.className} style={props.style}>
      <p className="about__short">
        I'm a product-focused web engineer currently working at <a href="https://www.connected.io/">Connected</a>.
        My most recent projects are in the areas of in data engineering, virtual and extended reality,
        computer aided design, and healthcare.
      </p>
      <p className="about__short">
        I'm also a team lead and an engineering manager, facilitating guild growth through technical
        rituals and company-wide socials in addition to supporting the individual career growth
        of my reports.
      </p>
      <p className="about__short">
        Previously, I worked at <a href="https://flipp.com/home"> Flipp</a> to build and deliver
        customized desktop and mobile flyer themes and dynamic content for Canadian and US
        retailers on Flipp’s hosted platform.
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