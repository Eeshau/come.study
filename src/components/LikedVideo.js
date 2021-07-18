import React from 'react';
import firebase from '../firebase.js';
import '../components/ListCard.css';
import Video  from '/Users/eesha/Desktop/react-firebase-frontend/src/components/Video.js'
import { Route, Redirect, Link } from "react-router-dom";


function LikedVideo(props) {
  const[Youtube, setYoutube] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
    const db = firebase.firestore()
    const data = await db.collection("Youtube").where("likers", "array-contains", props.USER ).get()
    setYoutube(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    fetchData()
  }, [])


  return (


    <div>
          <div className="ListCards"> 
            {Youtube.map(Youtube => (
              <div>
                  <ul key={Youtube.id} > 
                    <Video 
                    link={Youtube.link}
                    />
                  </ul>
              </div>
            ))}
          </div>
    </div>
  );
}


export default LikedVideo;

