import React, { useEffect, useState } from 'react';
import './global.css';
import './app.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api';

function App() {
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

  async function addDev(e) {
    e.preventDefault();
    const response = await api.post('/devs', {
      git_user,
      techs,
      latitude, longitude
    })

    console.log(response.data);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={addDev}>
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
      </aside>
      <main>
        <ul>
          <li className="devItem">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/45516090?s=460&v=4" alt="Guilherme Ulbriki"/>
              <div className="user_info">
                <strong>Guilherme Ulbriki</strong>
                <span>ReactJS, Reacte Native, NodeJS</span>
              </div>
            </header>
            <p>IFFar Tecnico em Informatica - Campus Frederico Westphalen</p>
            <a href="https://github.com/guilhermeulbriki">Acessar perfil no Github</a>
          </li>
          <li className="devItem">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/45516090?s=460&v=4" alt="Guilherme Ulbriki"/>
              <div className="user_info">
                <strong>Guilherme Ulbriki</strong>
                <span>ReactJS, Reacte Native, NodeJS</span>
              </div>
            </header>
            <p>IFFar Tecnico em Informatica - Campus Frederico Westphalen</p>
            <a href="https://github.com/guilhermeulbriki">Acessar perfil no Github</a>
          </li>
          <li className="devItem">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/45516090?s=460&v=4" alt="Guilherme Ulbriki"/>
              <div className="user_info">
                <strong>Guilherme Ulbriki</strong>
                <span>ReactJS, Reacte Native, NodeJS</span>
              </div>
            </header>
            <p>IFFar Tecnico em Informatica - Campus Frederico Westphalen</p>
            <a href="https://github.com/guilhermeulbriki">Acessar perfil no Github</a>
          </li>
          <li className="devItem">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/45516090?s=460&v=4" alt="Guilherme Ulbriki"/>
              <div className="user_info">
                <strong>Guilherme Ulbriki</strong>
                <span>ReactJS, Reacte Native, NodeJS</span>
              </div>
            </header>
            <p>IFFar Tecnico em Informatica - Campus Frederico Westphalen</p>
            <a href="https://github.com/guilhermeulbriki">Acessar perfil no Github</a>
          </li>
          <li className="devItem">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/45516090?s=460&v=4" alt="Guilherme Ulbriki"/>
              <div className="user_info">
                <strong>Guilherme Ulbriki</strong>
                <span>ReactJS, Reacte Native, NodeJS</span>
              </div>
            </header>
            <p>IFFar Tecnico em Informatica - Campus Frederico Westphalen</p>
            <a href="https://github.com/guilhermeulbriki">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default App;
