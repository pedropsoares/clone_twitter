import React from 'react';

import './styles.scss';

import {
  LocationOn,
  Cake,
} from '../../styles/icons';

const ProfilePages: React.FC = () => {
  const imgAvatar = 'https://scontent.frec36-1.fna.fbcdn.net/v/t1.0-9/27858842_1607666169319906_3691715161933078193_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=lyQ4dgBPM3IAX9D5oAS&_nc_ht=scontent.frec36-1.fna&oh=dbaa20cd661944a5258e02eae3c3a7ed&oe=5F5FFA3B';

  return (
    <div className="container-pp">
      <div className="banner">
        <img className="banner" src="" alt="" />
        <img className="avatar" src={imgAvatar} alt="" />
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
