import React from 'react';
import firebase from './firebase.js';
import './components/ListCard.css';
import UnitTitle from './components/UnitTitle.js'
import Scrolldb from './components/Scrolldb.js'
import Video  from '/Users/eesha/Desktop/react-firebase-frontend/src/components/Video.js'
import { Route, Redirect, Link } from "react-router-dom";


function App(props) {
  const[Youtube, setYoutube] = React.useState([])
  const[dataa, setData]= React.useState()
  const[currentUser, setCurrentUser] = React.useState()
  const[notLoggedIn, setNotLoggedIn] = React.useState()

  React.useEffect(() => {
    const fetchData = async () => {
    const db = firebase.firestore()
    const data = await db.collection("Youtube").where("unit", "==", props.unit).get()
    setYoutube(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    fetchData()
  }, [])

    
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);


  const favorite = (Youtube) => {
    if(currentUser) {
    const liker = currentUser.uid;
      const db = firebase.firestore()
      db.collection("Youtube").doc(Youtube.id).update ({
        likers: firebase.firestore.FieldValue.arrayUnion(liker),
        likes: firebase.firestore.FieldValue.increment(1),
    })
    } else {
      setNotLoggedIn(true) 
      }
  }






  return (


    <div>

    <UnitTitle
      unit={props.unit}
      link={props.link}
      subject={props.subject}
      subjectlink={props.subjectlink}
    />

          <div className="ListCards"> 
            {Youtube.map(Youtube => (
              <div>
                  <ul key={Youtube.id} > 
                    <Video 
                    link={Youtube.link}
                    />
                  </ul>
                <button onClick={() => favorite(Youtube)}> + Favourite </button>
              </div>
            ))}
            { notLoggedIn ? (<Redirect to="/Login" /> ): null}
          </div>


          <UnitTitle
            unit="Worksheets"
            link={props.link}
            subject={props.subject}
            subjectlink={props.subjectlink}
          />

        <Scrolldb
          unit= {props.unit}
        />


    </div>

  );
}


export default App;

