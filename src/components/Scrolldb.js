import React from 'react';
import firebase from '../firebase.js';
import Scrollitem from './ScrollItem.js'
import './ScrollItem.css'
import Content from './Content.js'
import { Route, Redirect, Link } from "react-router-dom";

////tutorial used https://dev.to/rossanodan/how-to-fetch-subcollections-from-cloud-firestore-with-react-3n93

function Scrolldb(props) {

    const[Homework, setHomework] = React.useState([])
    const[dataa, setData]= React.useState()
    const[currentUser, setCurrentUser] = React.useState()
    const[notLoggedIn, setNotLoggedIn] = React.useState()

  
    React.useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        setCurrentUser(user);
  
      });
    }, []);


    


const Open= function(doc) {


  if (doc===doc && dataa!=null) {
    setData(null)
  } else {
    setData(doc)
  }
  return (
    null
  );
}  


    
    React.useEffect(() => {
      const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("Homework").where("unit", "==", props.unit).get()
      setHomework(data.docs.map(doc => ({...doc.data(), id: doc.id})))
      }
      fetchData()
    }, [])
  
  

    const favorite = (Homework) => {
      if(currentUser) {
      const liker = currentUser.uid;
        const db = firebase.firestore()
        db.collection("Homework").doc(Homework.id).update ({
          likers: firebase.firestore.FieldValue.arrayUnion(liker),
          likes: firebase.firestore.FieldValue.increment(1),
      })
      } else {
        setNotLoggedIn(true) 
        }
    }


  
  
  
    return (
  <div className="scrollmenu">
  <div className="SmoothScroll">

    <div className="ScrollSpace"> 
  
      {Homework.map(Homework => (
      <a href= "#section2" id="section1">
      <ul key={Homework.id} onClick={() => Open(Homework)}> 
       <Scrollitem 
       link={Homework.picture}
       title={Homework.title}
       />

      </ul>
      <button onClick={() => favorite(Homework)}> + Favourite  </button>
      </a>
  
      ))}
    </div>

    <div id="section2" className="ContentSectionPop">
      {dataa ? (
            <Content 
            title={dataa.title}
            contributor={dataa.contributor}
            description={dataa.description}
            type={dataa.type}
            unit={dataa.unit}
            link={dataa.link}
            />
        ): null}
    </div>

    { notLoggedIn ? (<Redirect to="/Login" /> ): null}
  </div>

  
  </div>
  
  
    );
  }
  
  
  export default Scrolldb;