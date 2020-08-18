import React from 'react';

import { ArrowLeft } from '../../styles/icons';

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

      {/* <ProfilePages /> */}
      {/* <BottomMenu>
        <HomeIcon />
        <SeacherIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> */}
    </div>
  );
};

export default Main;
