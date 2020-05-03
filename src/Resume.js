import React from 'react';
import * as data from "./Resume.json"
import './Resume.css'

function Resume(props) {

  const experience = data.experience.map((e) =>
    <div className="resume__experience">
      <h3><a href={e.website}>{e.company}</a></h3>
      {e.roles.map((r) =>
        <div className="resume__section_content">
          <div className="resume__left_content">
            <p>{r.date}</p>
          </div>
          <div className="resume__right_content">
            <h4>{r.position}</h4>
            <ul className="resume__description">
              {r.experience.map((e) =>
                <li>{e}</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );

  const projects = data.projects.map((p) =>
    <div className="resume__project">
      <p>{p.host}</p>
      <div className="resume__section_content">
        <div className="resume__left_content">
          <p>{p.date}</p>
        </div>
        <div className="resume__right_content">
          <h4>{p.name}</h4>
          <ul className="resume__list_hori">
            {p.stack.map((s) =>
              <li>{s}</li>
            )}
          </ul>
          <ul className="resume__description">
            {p.description.map((d) =>
              <li>{d}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );

  const honours = data.honours.map((h) =>
    <div className="resume__section_content">
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
          {data.education[0].activities.map((a) =>
            <li>{a}</li>
          )}
        </ul>
      </div>
    </div>
  </div>

  return (
    <div className={props.className} style={props.style}>
      <div className="resume__download">
        <p><a href="#">Download</a></p>
      </div>
      <div className="resume">
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