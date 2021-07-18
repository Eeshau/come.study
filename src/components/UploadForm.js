import React from 'react';
import firebase from '../firebase.js'
import './UploadForm.css'


const db =firebase.firestore()

function UploadForm() {
    const[fileUrl, setFileUrl] = React.useState(null);

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());
      };
    


    const onSubmit = (e) => {
        e.preventDefault()
        const title = e.target.title.value;
        const description = e.target.description.value;
        const type = e.target.type.value;
        const subject = e.target.subject.value;
        if(!title) {
            return (
              alert("Hiii please fill in the form properly")
            )
        }

        db.collection("Homework").doc(title).set ({
            title: title,
            fileUrl: fileUrl,
            subject: subject,
            description: description,
            type: type,

        })
    }



    return (

          <>
            <div>

                <div className="UploadFormStyle">
                <form onSubmit={onSubmit}>
                <label for="file-upload" class="Custom-file-upload">Custom Upload
                  <input id="file-upload" type="file" className="Custom-file-upload" onChange={onFileChange} />
                  </label>

                  
                  <input type="text" name="title" placeholder="Title -What should we call this?"/>
                  <input type="text" name="description" placeholder="Description -What is this?"/>

                  <select id="type" name="type">
                      <option value="homework">Worksheet</option>
                      <option value="note">Note</option>
                  </select>

                  <select id="subject" name="subject">
                      <option value="Calculus & Vectors">Calculus & Vectors</option>
                      <option value="Advanced functions">Advanced functions</option>
                      <option value="Grade 12 Chemistry">Grade 12 Chemistry</option>
                      <option value="Grade 12 Physics">Grade 12 Physics</option>
                      <option value="Grade 11 Chemistry">Grade 11 Chemistry</option>
                      <option value="Grade 11 Physics">Grade 11 Physics</option>
                  </select>

             
                  <button>Submit</button>
                </form>
                </div>

                <h2> Become a tutor  </h2>
                <p> Apply through <a href="https://7wzin9rb99p.typeform.com/to/H9kl7w09">here</a> :)</p>

            </div>
          </>

      );
    }

export default UploadForm