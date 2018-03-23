import React from 'react';

const VideoListItem = ({video}) => {
  const imageURL = video.snippet.thumbnails.default.url;
   
  return (
  <li className="list-group-item">
    <div className="video-list media">
      <div className="media-left">
        <img src={imageURL} alt="yt_thumb" className="media-object" />
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.description}</div>
      </div>
    </div>  
  </li>
  );
};

export default VideoListItem;