import React from 'react';
import FeatherIcon from 'feather-icons-react';
import './Badges.css';

function Badges({ social }) {
  const badgeItems = social.map((c) =>
    <a key={c.platform} href={c.url}>
      <div className="badges__badge">
        <div className="badges__iconOutline">
          <FeatherIcon className="badges__icon" style={{ backgroundColor: `${c.color}` }} icon={c.icon} />
        </div>
        <p>{c.platform}</p>
      </div>
    </a>
  );

  return (
    <div className="badges">
      {badgeItems}
    </div>
  )
}

export default Badges;