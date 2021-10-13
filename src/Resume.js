import React from 'react';
import * as data from "./Resume.json";
import * as resumePDF from "./FanGuoResume.pdf";
import './Resume.css';

function Resume(props) {
  const contact = Object.values(data.contact).slice(1).map((c, i) =>
    <div key={i.toString()} className="resume__contact">
      <li><a href={c}>{c}</a></li>
    </div>
  )

  const experience = data.experience.map((e, i) =>
    <div key={i.toString()} className="resume__experience">
      <h3><a href={e.website}>{e.company}</a></h3>
      {e.roles.map((r, i) =>
        <div key={i.toString()} className="resume__section_content">
          <div className="resume__left_content">
            <p>{r.date}</p>
          </div>
          <div className="resume__right_content">
            <h4>{r.position}</h4>
            <ul className="resume__description">
              {r.experience.map((d, i) =>
                <li key={i.toString()}>{d}</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );

  const projects = data.projects.map((p, i) =>
    <div key={i.toString()} className="resume__project">
      <p>{p.host}</p>
      <div className="resume__section_content">
        <div className="resume__left_content">
          <p>{p.date}</p>
        </div>
        <div className="resume__right_content">
          <h4>{p.name}</h4>
          <ul className="resume__list_hori">
            {p.stack.map((s, i) =>
              <li key={i.toString()}>{s}</li>
            )}
          </ul>
          <ul className="resume__description">
            {p.description.map((d, i) =>
              <li key={i.toString()}>{d}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );

  const honours = data.honours.map((h, i) =>
    <div key={i.toString()} className="resume__section_content">
      <div className="resume__left_content">
        <p>{h.date}</p>
      </div>
      <div className="resume__right_content">
        <h4>{h.name}</h4>
        <p>{h.description}</p>
      </div>
    </div>
  );

  const education = <div className="resume__education">
    <h3>Education</h3>
    <p>{data.education[0].school}</p>
    <div className="resume__section_content">
      <div className="resume__left_content">
        <p>{data.education[0].date}</p>
      </div>
      <div className="resume__right_content">
        <h4>{data.education[0].degree}</h4>
        <ul className="resume__description">
          {data.education[0].activities.map((a, i) =>
            <li key={i.toString()}>{a}</li>
          )}
        </ul>
      </div>
    </div>
  </div>

  return (
    <div className={props.className} style={props.style}>
      <div className="resume__download">
        <p><a href={resumePDF} download>Download</a></p>
      </div>
      <div className="resume">
        <div className="resume__contacts">
          <div className="resume__contacts_title">
            <h1>{Object.values(data.contact)[0]}</h1>
            <p>Product focused web engineer and engineering manager.</p>
          </div>
          <ul className="resume__contacts_content">{contact}</ul>
        </div>
        <div className="resume__experiences">{experience}</div>
        <div className="resume__projects">
          <h3>Projects</h3>
          {projects}
        </div>
        <div className="resume__honours">
          <h3>Honours</h3>
          {honours}
        </div>
        {education}
      </div>
    </div>
  );
}

export default Resume;