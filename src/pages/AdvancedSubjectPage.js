import React from 'react';
import HomeCard from '../components/HomepageCard.js'
import '../components/HomepageCard.css'

function AdvancedSubjectPage() {
    return (
  <div className="Cards">
  <h2>The Best of Advanced Functions</h2>
    <div className="CardsGroup">
      <HomeCard 
      title="Polynomial Functions"

      link="/Advanced-Functions/Polynomial-Functions"
      />

      <HomeCard 
      title="Factor Theorem & Inequaltities"

      link="/Advanced-Functions/Factor-Theorem-&-Inequaltities"
      />


      <HomeCard 
      title="Logarithmic & Exponential Functions"

      link="/Advanced-Functions/Logarithmic-&-Exponential-Functions"
      />

      <HomeCard 
      title="Trigonometry"

      link="/Advanced-Functions/Trigonometry"
      />

      <HomeCard 
      title="Trigonometric Equations and Identities"

      link="/Advanced-Functions/Trigonometric-Equations-and-Identities"
      />

      <HomeCard 
      title="Rates of change"

      link="/Advanced-Functions/Rates-of-change"
      />
      
      <HomeCard 
      title="Rational Functions"

      link="/Advanced-Functions/Rational-Functions"
      />

    </div>
  </div>
    );
  }
  
  
  export default AdvancedSubjectPage;