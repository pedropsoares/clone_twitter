import React from 'react';

import Tweet from '../Tweet';

import './styles.scss';

const Feed: React.FC = () => {
  return (
    <div className="feed-container">
      <div className="tab">Tweets</div>

      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />

    </div>
  );
};

export default Feed;
