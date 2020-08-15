import React from 'react';

import './styles.css';

const Main: React.FC = () => {
  return (
    <div className="main-container">
      <div className="main-header">
        <button>
          {/* <BackIcon /> */}
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
