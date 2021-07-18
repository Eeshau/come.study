import React from 'react';
import './ScrollItem.css'


const Scrollitem = props => (
    <div className="ScrollItemStyle">
    <img src={props.link}></img>
    <h3>{props.title}</h3>
    </div>
)

export default Scrollitem



