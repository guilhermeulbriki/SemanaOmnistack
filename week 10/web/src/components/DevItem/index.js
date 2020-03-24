import React from 'react';
import './style.css';

function DevItem({ dev }) {
  return (
    <li className="devItem">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user_info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.git_user}`}>Acessar perfil no Github</a>
    </li>
  );
}

export default DevItem;
