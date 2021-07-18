import React from 'react';
import './Video.css'

const Video = props => (
    <div className="videoMenu">
        <div className="videoFrame">
            <div className="frame">
            <iframe id="player" type="text/html" 
            style={{width:"100%", height:"100%"}}
            allow="picture-in-picture; accelerometer; autoplay"
            allowFullScreen="1"
            src={props.link} 
            frameBorder="0">
            </iframe>
            </div>
        </div>
    </div>
    )

export default Video

