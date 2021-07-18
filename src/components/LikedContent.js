import React from 'react';
import firebase from '../firebase.js';
import Scrollitem from './ScrollItem.js'
import './ScrollItem.css'
import Content from './Content.js'

////tutorial used https://dev.to/rossanodan/how-to-fetch-subcollections-from-cloud-firestore-with-react-3n93

function LikedContent(props) {

    const USER = props.USER;

    const[currentUser, setCurrentUser] = React.useState(USER)
    const[Homework, setHomework] = React.useState([])
    const [dataa, setData]= React.useState()
    

    
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
      firebase.auth().onAuthStateChanged((user) => {
        setCurrentUser(user.uid);
      });
    }, []);





    React.useEffect(() => {
      const fetchData = async () => {
      const db = firebase.firestore()

      const data = await db.collection("Homework").where("likers", "array-contains", currentUser ).get()


      setHomework(data.docs.map(doc => ({...doc.data(), id: doc.id})))
      }
      fetchData()
    }, [])



    
  

    return (
  
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
  </div>

  

  
  
    );
  }
  
  export default LikedContent;