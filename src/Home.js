import React from 'react';
import HomeCard from './components/HomepageCard.js'
import './components/HomepageCard.css'



function Home() {
  return (
    <div>
      <div  id="Discover" className="Cards">
        <h2>The best of</h2>
          <div className="CardsGroup">
            <HomeCard 
            title="Calculus & Vectors"
            link="/Calculus-&-Vectors"
            />

          <HomeCard 
            title="Advanced Functions"
            link="/Advanced-Functions"
            />


          <HomeCard 
            title="Functions"
            link="/Functions"
            />


          

          </div>

  
      </div>

    </div>
  );
}
  
  
  export default Home;