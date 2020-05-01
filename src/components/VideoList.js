import React from 'react';
import VideoItem from './VideoItem';

// instead of passing props into VideoList, we pass specific properties in order to destructure the references to them.  This saves us from typing them all out.
const VideoList = ({videos, onVideoSelect}) => {
    const rederedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video = {video}/>;
    });

    return <div className="ui relaxed divided list" >{rederedList}</div>;

};

export default VideoList;