import React from "react";
import {default as app} from "../firebase";
import firebase from 'firebase'
import LikedContent from '../components/LikedContent.js'
import UploadForm from '../components/UploadForm.js'
import './Dashboard.css'
import '../components/UploadForm.css'
import LikedVideo from '../components/LikedVideo.js'

const db = app.firestore()

const Dashboard = () => {
  const[currentUser, setCurrentUser] = React.useState()

  
  React.useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);

    });
  }, []);


const CreateUserProfile = () => {
  const UserName = currentUser.displayName;
    db.collection("UserDashboard").doc(UserName).set ({
      UserName: UserName,
      uid: currentUser.uid,
      extra: "history",

      
  })
}


  



currentUser &&
CreateUserProfile()


  return (
    <div className="GoogleButtonStyle"> 
      <div className="DashboardStyle"> 
        <>
          <div className="Profile">
          <h1>Dashboard</h1>
          {currentUser && <>
          <h3>Hey {currentUser.displayName}!</h3>
          <img src={currentUser.photoURL} width="100" height="100" radius="50"  />
          <p>Signed in as {currentUser.email}</p>  
          </>}

          <button onClick={() => firebase.auth().signOut()}>Sign out</button>
          </div>


            <h3>Your Favourite Videos</h3> 
            <div> 
              {currentUser && <>      
              <LikedVideo
                USER= {currentUser.uid}
                collections= "Homework"
              />
              </>}
            </div>
          
            <h3>Your Favourite Notes</h3> 
            <div className="DashboardScroll"> 
              {currentUser && <>      
              <LikedContent
                USER= {currentUser.uid}
              />
              </>}
            </div>

          <h3>Contribute!</h3>      
          <UploadForm/>
        </>
      </div>
    </div>
  );
};

export default Dashboard;