import React from 'react'
import './Content.css'





const Content = (props) => { 

   return (

    <div className="ContentSection">
        <div className="ContentInfo"> 
            <h4>{props.unit}</h4>
            <h2>{props.title}</h2>
            <h5>{props.type}</h5>
            <h6>Contributed by {props.contributor}</h6>
            <p>{props.description}</p>
        </div>
        <div className="pdf">
            <iframe src={props.link} width="100%" height="490px">
            </iframe>
        </div> 
    </div>

    )
}

export default Content;