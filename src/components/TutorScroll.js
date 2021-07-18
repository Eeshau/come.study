import React from 'react'
import './Tutor.css'

///add props later from the scrolly menu,  connect to fire store??
const TutorScroll = (props) => (
    <div className="TutorSection">
        <div className="TutorInfo">
            <img src={props.Picture}></img> 
            <h4>{props.name}</h4>
        </div>
    </div>
)

export default TutorScroll;