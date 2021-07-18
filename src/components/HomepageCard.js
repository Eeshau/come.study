import React from 'react';
import './HomepageCard.css'
import {Link} from 'react-router-dom';


const HomeCard = props => (

    <div className="HomepageCard">
    <Link to={props.link}>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    </Link>

    </div>
)

export default HomeCard