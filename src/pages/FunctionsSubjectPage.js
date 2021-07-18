import React from 'react';
import HomeCard from '../components/HomepageCard.js'
import '../components/HomepageCard.css'

function FunctionsSubjectPage() {
    return (
  <div className="Cards">
  <h2>The Best of Functions</h2>
    <div className="CardsGroup">
      <HomeCard 
      title="Characteristics Of Functions"

      link="/Functions/Characteristics Of Functions"
      />

      <HomeCard 
      title="Exponential Functions"

      link="/Functions/Exponential Functions"
      />


      <HomeCard 
      title="Discrete Functions"

      link="/Functions/Discrete Functions"
      />

      <HomeCard 
      title="Trigonometric Functions"

      link="/Functions/Trigonometric Functions"
      />


    </div>
  </div>
    );
  }
  
  
  export default FunctionsSubjectPage;