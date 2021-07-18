import React from 'react';
import HomeCard from '../components/HomepageCard.js'
import '../components/HomepageCard.css'

function CalculusSubjectPage() {
    return (
  <div className="Cards">
  <h2>The Best of Calculus & Vectors</h2>
    <div className="CardsGroup">
      <HomeCard 
      title="Introduction to calculus"

      link="/Calculus-&-Vectors/Introduction-to-calculus"
      />

      <HomeCard 
      title="Rules for Differentiation"

      link="/Calculus-&-Vectors/Rules-For-Differentiation"
      />


      <HomeCard 
      title="Derivatives of Trig, Log and Exponential Functions"

      link="/Calculus-&-Vectors/Derivatives-of-trig-log-exponential-functions"
      />

      <HomeCard 
      title="Curve Sketching"

      link="/Calculus-&-Vectors/Curve-Sketching"
      />

      <HomeCard 
      title="Optimization"

      link="/Calculus-&-Vectors/Optimization"
      />


    </div>
  </div>
    );
  }
  
  
  export default CalculusSubjectPage;