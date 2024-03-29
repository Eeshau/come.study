import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firebase from "../firebase";
import Signon from './GoogleSignIn.js'
import './Dashboard.css'


const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/Dashboard");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="DashboardStyle">
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <Signon/>
    </div>
  );
};

export default withRouter(SignUp);
