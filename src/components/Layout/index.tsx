import React from 'react';

import Main from '../Main';

import './styles.css';

const Layout: React.FC = () => {
  return (
    <div className="layput-container">
      <div className="layout-wrapper">
        {/* <MenuBar> */}
          <Main />
        {/* </MenuBar> */}
      </div>
    </div>
  );
};

export default Layout;
