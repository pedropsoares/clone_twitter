import React from 'react';

import ProfilePages from '../ProfilePages';

import {
  ArrowLeft,
  Home,
  Email,
  Notifications,
  Search,
} from '../../styles/icons';

import './styles.scss';

const Main: React.FC = () => {
  return (
    <div className="main-container">
      <div className="main-header">
        <button>
          <ArrowLeft id="arrow-left" />
        </button>

        <div className="main-profileInfo">
          <strong>
            Pedro Soares
          </strong>
          <span>77 Tweets</span>
        </div>
      </div>

      <ProfilePages />

      <div className="bottom-menu">
        <Home id="home-icon" className="icons-menu" />
        <Search id="seacher-icon" className="icons-menu" />
        <Notifications id="bell-icon" className="icons-menu" />
        <Email id="email-icon" className="icons-menu" />
      </div>
    </div>
  );
};

export default Main;
