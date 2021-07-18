import React from 'react';
import {Link} from 'react-router-dom';
import './UnitTitle.css'

const UnitTitle = props => (
<div className="titleUnit">
<Link to={props.subjectlink}>
<h4>{props.subject}</h4>
</Link>
<h1>{props.unit}</h1>
</div>
)

export default UnitTitle

