import React from 'react'
import firebase from '../firebase.js';
import TutorScroll from './TutorScroll'
import Tutor from '../components/Tutor.js'
import '../pages/PageTutor.css'
import '../pages/OurJam.css'


////tutorial used https://dev.to/rossanodan/how-to-fetch-subcollections-from-cloud-firestore-with-react-3n93

function TutorsList(props) {

    const[TutorsList, setTutorsList] = React.useState([])
    const[dataa, setData]= React.useState()

    function Open(doc) {
      setData(doc)
      return (
        null
      );
    }
    


    
    React.useEffect(() => {
      const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("Tutors").where("Verified", "==", true).get()
      setTutorsList(data.docs.map(doc => ({...doc.data(), id: doc.id})))
      }
      fetchData()
    }, [])
  
  


    const db = firebase.firestore()
    const testing = () => {
        db.collection("UserDashboard").doc("Eesha Ulhaq").set ({
          Testing: "LOOP",
          extra1: "MEEEP"
      })
    }
    testing()
  
  
  
    return (
<div> 
  <div className="TutorTitle"> 
  <h1> Tutors </h1>
  </div>
    <div className="scrollmenu">
      <div className="SmoothScroll">
        <div className="ScrollSpace"> 
      
        
          {TutorsList.map(TutorsList => (
            
          <ul key={TutorsList.id} onClick={() => Open(TutorsList)}> 
          
            <TutorScroll
            name= {TutorsList.Name}
            Picture= {TutorsList.Picture}
            />
          </ul>
          ))}

        </div>
        <div id="" className="">
          {dataa ? (
              <Tutor 
                Name={dataa.Name}
                Picture={dataa.Picture}
                Description={dataa.Description}
                CalendarDescription={dataa.CalendarDescription}
                CalendlyLink= {dataa.CalendlyLink}
                /> 
            ): null}
        </div>
      </div>
    </div>
    <div className="OurJamPic">
                <h1>Get Involved</h1>
                <h3>Get volunteer hours. Tutor a friend.</h3>
                <h5>Login & Apply</h5>
      </div>
</div>
  
    );
  }
  
  
export default TutorsList;