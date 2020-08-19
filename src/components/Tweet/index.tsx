import React from 'react';

import {
  Chat,
  Rocketseat,
  Favorite,
} from '../../styles/icons';

import './styles.scss';

const imgAvatar = 'https://scontent.frec36-1.fna.fbcdn.net/v/t1.0-9/27858842_1607666169319906_3691715161933078193_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=lyQ4dgBPM3IAX9D5oAS&_nc_ht=scontent.frec36-1.fna&oh=dbaa20cd661944a5258e02eae3c3a7ed&oe=5F5FFA3B';

const Tweet: React.FC = () => {
  return (
    <div className="tweet-container">
      <div className="retweet">
        Você retweetou
      </div>

      <div className="body">
        {/* <img className="avatar" src={imgAvatar} alt="" /> */}

        <div className="content">
          <div className="header">
            <strong>Rocketseat</strong>
            <span>@reocketseat</span>

            <div className="time">27 de jun</div>
          </div>

          <div className="dot" />

          <div className="description">
            Foguete não tem ré
          </div>

          <div className="img-content" />

          <div className="icons">

            {/* <div className="status">
              <Chat className="ComentIcon" />
              18
            </div> */}

            <div className="status">
              <div className="rocketseat">
                <Rocketseat />
              </div>
            </div>

            {/* <div className="status">
              <Favorite className="LikeIcon" />
              777
            </div> */}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Tweet;
