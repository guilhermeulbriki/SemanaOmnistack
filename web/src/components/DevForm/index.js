import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }) {
  const [git_user, setGitUser] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function submit(e) {
    e.preventDefault();
    await onSubmit({
      git_user,
      techs,
      latitude,
      longitude
    });
    setGitUser('');
    setTechs('');
  }

  return (
    <form onSubmit={submit}>
      <div className="input_block">
        <label htmlFor="git_user">Usuário do Github</label>
        <input
          name="git-user"
          id="git_user"
          required
          value={git_user}
          onChange={e => setGitUser(e.target.value)}
        />
      </div>
      <div className="input_block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </div>
      <div className="input_group">
        <div className="input_block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            required
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
          />
        </div>
        <div className="input_block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            required
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default DevForm;
