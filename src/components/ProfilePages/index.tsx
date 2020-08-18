import React from 'react';

import './styles.scss';

import {
  LocationOn,
  Cake,
} from '../../styles/icons';

const ProfilePages: React.FC = () => {
  return (
    <div className="container-pp">
      <div className="banner">
        <img className="banner" src="" alt="" />
        <img className="avatar" src="" alt="" />
      </div>

      <div className="profile-data">
        <button>Editar Perfil</button>

        <h1>Pedro Soares</h1>
        <h2>@pedro_soares</h2>

        <p>
          Developer web
        </p>

        <ul>
          <li>
            <LocationOn id="location-icon" className="icons-profile" />
            <span>
              Reccife PE, Brasil
            </span>
          </li>
          <li>
            <Cake id="cake-icon" className="icons-profile" />
            <span>
              Nacido(a) em 9 de fevereiro de 1998
            </span>
          </li>
        </ul>

        <div className="followage">
          <span>
            seguindo <strong>720</strong>
          </span>
          <span>
            <strong>720 </strong> seguidores
          </span>
        </div>

      </div>
    </div>
  );
};

export default ProfilePages;
