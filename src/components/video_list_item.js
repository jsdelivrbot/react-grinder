import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;
  console.log(onVideoSelect);
  
   
  return (
  <li onClick={() => onVideoSelect(video)} className="list-group-item">
    <div className="video-list media">
      <div className="media-left">
        <img src={imageURL} alt="yt_thumb" className="media-object video-item "  />
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.description}</div>
      </div>
    </div>  
  </li>
  );
};

export default VideoListItem;