import React from 'react';
import './Profile.css';

function Profile({ bio }) {
  const stats = bio.stats.map((s) =>
    <p key={s.number}><strong>{s.number}</strong> {s.value}</p>
  );

  const description = bio.description.map((d) =>
    <p key={d[0]}>{d}</p>
  );

  return (
    <div className="profile">
      <div className="profile__bio">
        <div className="profile__img">
          <img alt="Fan looking away" src='/images/pfp.jpg' />
        </div>
        <div className="profile__text">
          <h1>{bio.name}</h1>
          <div className="profile__stats">
            {stats}
          </div>
          <div className="profile__description">
            {description}
          </div>
          <p>
            <a href={bio.website}>{bio.website} </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;