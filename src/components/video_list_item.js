import React from 'react';

const VideoListItem = (props) => {
  console.log(props.video.snippet.thumbnails);
  
  return <li>Video</li>
}

export default VideoListItem;