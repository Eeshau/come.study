import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../firebase.js";
import { AuthContext } from "../Auth.js";
import Signon from './GoogleSignIn'



const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/Dashboard");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );


  

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/Dashboard" />;
  }

  return (
    <div className="DashboardStyle">
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="youremail@" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <div className="GoogleButtonStyle">
      <Signon/>
      </div>
      <a href="/SignUp"><button url="/SignUp">Sign up with email?</button></a>
    </div>
  );
};

export default withRouter(Login);
