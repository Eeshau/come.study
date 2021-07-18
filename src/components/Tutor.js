
import React from 'react';
import '../pages/PageTutor.css'
import Calendly from '../pages/calendly.js'

function Tutor(props) {

    return (

<div>
  <div className="TutorLayout">
    <div className="TutorGroup">
      <img src={props.Picture} alt="Tutor Profile"></img>
      <div className="tutorText">
        <h4>Hey! I'm</h4>
        <h2>{props.Name}</h2>
        <p>{props.Description}</p>
        <h5>{props.link}</h5>
        
      </div>
    </div>

    <div className="Socials Logo">
      
    </div>

    <div className="BookTutor">
      <h4>Need Help?</h4>
      <h2>Book a time with me!</h2>
      <h5>{props.CalendarDescription}</h5>


    </div>

  <Calendly
    CalendlyLink={props.CalendlyLink}
  />
</div>
</div>
    );
  }
  
  
  export default Tutor;