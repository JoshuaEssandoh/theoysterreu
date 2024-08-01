import React, { useState } from 'react';
import axios from 'axios';
import '.././css/upload.css';


function Upload() {
    
    
    const container = document.getElementById('container');

    const [isSignUp, setSignUp] = useState(true);
    const signInButton = () => {
        setSignUp(true);
    }
    const uploadButton = () => {
        setSignUp(false);
    }
    
    //pulls values from the form code using function form Reactt called useState
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        pwd: ''
    })
    // handleChange function
    const handleChange = (e) => {
        const {name, value} = e.target;

        setValues(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    //onSubmit calls  handleSubmit function when the submit button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        const NewUser = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            pwd: values.pwd

        }
        
        //calls the axios API
        axios.post('https://theoysterreu-api.onrender.com/', NewUser)   
        .then(res => console.log("Registered Successfully!"))
        .catch(err => console.log(err));
    }
    //----------------------------------------------------------------------------------------------------------------------------------------
    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
          (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
          ).toString(16)
        );
      }
      
      const actionSubmit = (e) => {
        let postid = uuidv4();
        let inputElem = document.getElementById("imgfile");
        let file = inputElem.files[0];
        // Create new file so we can rename the file
        let blob = file.slice(0, file.size, "image/jpeg");
        let newFile = new File([blob], `${postid}_post.jpeg`, { type: "image/jpeg" });
        // Build the form data - You can add other input values to this i.e descriptions, make sure img is appended last
        // Port listening to backend instead of frontend
        let formData = new FormData();
        formData.append("imgfile", newFile);
        fetch("http://localhost:8083/upload", {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((x) => console.log(x));
      };
      // Loads the posts on page load
      // make sure posts is listening to the backend, not the front end

    return (
        <div name="Uploads" className="upload-section">
            <p className="upload-title">
                <a id="Upload">
                Upload Image for Annotation
                </a>
            </p>
        <div className={`container ${isSignUp ? "right-panel-active" : ""}`} id="container">
            <div className="form-container signIn">
                <form onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <label className="font-head" htmlFor="firstName">First name:</label><br/>
                    <input className="text-box" type="text" id="firstName" name="firstName" onChange={handleChange}/><br/>
                    <label className="font-head" htmlFor="lName">Last name:</label><br/>
                    <input className="text-box" type="text" id="lastName" name="lastName" onChange={handleChange}/><br/>
                    <label className="font-head" htmlFor="email">Email:</label><br/>
                    <input className="text-box" type="email" name="email" id="email" onChange={handleChange}/><br/>
                    <label className="font-head" htmlFor="pwd">Password: </label><br/>
                    <input className="text-box" type="password" id="pwd" name="pwd" onChange={handleChange}/><br/>
    
                    <button className="btn s-button" type="submit">Sign Up</button>
                </form>
            </div>


            <div className="form-container upload-container">
                <form action="#" onSubmit={actionSubmit}>
                    <h1>Upload File</h1>
                    <input type="file" name="imgfile" accept="image/jpeg" id="imgfile"/>
                    <button className="btn s-button" id="submitBtn" type='submit'>Submit</button>
                    <div className="" id="images" style={{display: "none"}}></div>
                </form>
            </div>
                
             
            <div className="overlay-container">
                
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome!</h1>
                        <p>
                            To upload files, please enter your information
                        </p>
                        <button className="btn ghost" id="signIn" onClick={uploadButton}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>
                            Please upload the file you want to annonate
                        </p>
                        <button className="btn ghost" id="download" onClick={signInButton}>Upload Files</button>
                    </div>
                </div>

            </div>
               
        </div>
        <div className="streamlit">
            <a href="https://odd-ai.streamlit.app/" target='_blank'>
            <button className="sbtn streamlit-button">
                <span>Live Annotation Site</span>
            </button>
            </a>
        </div>
        
        </div>
    )
    
}

export default Upload