import React from 'react';

function About(props) {
  return (
    <div className={props.className} style={props.style}>
      <p className="about__short">
        I'm a software engineer based in Toronto, Canada, currently working at <a href="https://www.properly.ca/">
        Properly</a>, a Canadian real estate startup. So far, most of my work has been around supporting our SEO 
        initiatives by building out new pages, making pages more search engine-friendly, improving page performance 
        and supporting the content team in getting content on our pages faster and more efficiently.
      </p>
      <p className="about__short">
        Previously, I worked at <a href="https://www.gobble.com/">Gobble</a>, a dinner kit/ meal delivery service 
        operating in the US. Since our team was so small, I often owned new features and initiatives end to end. I 
        worked on customer features, improved internal processes, fixed time-critical bugs and translated requests 
        from other teams into beautiful and functional code.
      </p>
      <p className="about__short">
        Prior to that, I worked at <a href="https://www.connected.io/">Connected</a> on projects in related to AR/VR, 
        computer aided design, data engineering and healthcare. I was also a team lead and an engineering manager, and 
        can see myself in that role again in the future (Soon™)
      </p>
      <p className="about__short">
        My very first job was at <a href="https://flipp.com/home"> Flipp</a> to build and deliver
        customized desktop and mobile flyer themes and dynamic content for Canadian and US retailers on Flipp’s
        hosted flyer platform.
      </p>
      <p className="about__long">
        I graduated with a Bachelors of Applied Sciences in Computer Engineering from the University of
        Toronto. During my time there, I was active in many areas of student life, particularly in STEM outreach,
        sports and <a href="http://skulepedia.ca/wiki/Welcome">Skule spirit</a>. I was a residence don
        in my last year at <a href="http://www.newcollege.utoronto.ca/"> New College Residence</a>, and directly
        responsible for the wellbeing of the 40 students on my floor.
      </p>
      <p className="about__long">
        Usually I can be found offline pursuing one of my hobbies - currently they revolve around growing food, making 
        food 🌾, making food 🍜, eating food 😋 and using that food energy to pick things up and put them down 🏋️‍♀️.
      </p>
    </div>
  );
}

export default About;