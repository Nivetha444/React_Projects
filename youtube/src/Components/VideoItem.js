import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
return (
<div onClick={()=>onVideoSelect(video)} className="video-item item">
      <div className="ui image"><img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/></div>
      <div className="content">
     <div className="header">{video.snippet.title}</div>
     </div>
</div>
)
};

export default VideoItem;