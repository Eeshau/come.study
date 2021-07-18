import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './Header.js';
import Home from './Home.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CalculusSubjectPage from './pages/subject';
import AdvancedSubjectPage from './pages/AdvancedSubjectPage';
import FunctionsSubjectPage from './pages/FunctionsSubjectPage'
import Tutor from './components/Tutorsdb.js';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { AuthProvider } from './Auth'
import Dashboard from './pages/Dashboard.js'
import PrivateRoute from './PrivateRoute'
import OurJam from './pages/OurJam.js'
import Welcome from './pages/Welcome'
import Footer from './components/Footer.js'

ReactDOM.render(
  <AuthProvider> 
  <Router>
  <Switch>
  <React.StrictMode>



  <Header/>
  <div className="EverythingReact">
  <div className="Gap"></div>

  <Route path="/" exact component={Welcome}/>
    <PrivateRoute exact path="/Dashboard" component={Dashboard} />
    <Route path="/" exact component={Home}/>
    <Route path="/Calculus-&-Vectors" exact component={CalculusSubjectPage}/>
      <Route path="/Calculus-&-Vectors/Introduction-to-calculus" render= {(props) => ( <App subject="Calculus & Vectors" subjectlink="/Calculus-&-Vectors" link="/Calculus-&-Vectors/Introduction-to-calculus" unit="Introduction to Calculus"/> )} />
      <Route path="/Calculus-&-Vectors/Rules-For-Differentiation" render= {(props) => ( <App subject="Calculus & Vectors" subjectlink="/Calculus-&-Vectors" link="/Calculus-&-Vectors/Rules-For-Differentiation" unit= "Rules For Differentiation"/> )} />
      <Route path="/Calculus-&-Vectors/Derivatives-of-trig-log-exponential-functions" render= {(props) => ( <App subject="Calculus & Vectors" subjectlink="/Calculus-&-Vectors" link="/Calculus-&-Vectors/Derivatives-of-trig-log-exponential-functions" unit= "Derivatives of trig, log and exponential functions"/> )} />
      <Route path="/Calculus-&-Vectors/Curve-Sketching" render= {(props) => ( <App subject="Calculus & Vectors" subjectlink="/Calculus-&-Vectors" link="/Calculus-&-Vectors/Curve-Sketching" unit= "Curve Sketching"/> )} />
      <Route path="/Calculus-&-Vectors/Optimization" render= {(props) => ( <App subject="Calculus & Vectors" subjectlink="/Calculus-&-Vectors" link="/Calculus-&-Vectors/Optimization" unit= "Optimization"/> )} />
    <Route path="/Advanced-Functions" exact component={AdvancedSubjectPage}/>
      <Route path="/Advanced-Functions/Polynomial-Functions" render= {(props) => ( <App subject="Advanced Functions" subjectlink="/Advanced-Functions" link="/Advanced-Functions/Polynomial-Functions" unit="Polynomial Functions"/> )} />
      <Route path="/Advanced-Functions/Factor-Theorem-&-Inequaltities" render= {(props) => ( <App subject="Advanced Functions" subjectlink="/Advanced-Functions" link="/Advanced-Functions/Factor-Theorem-&-Inequaltities" unit="Factor Theorem & Inequaltities"/> )} />
      <Route path="/Advanced-Functions/Logarithmic-&-Exponential-Functions" render= {(props) => ( <App subject="Advanced Functions" subjectlink="/Advanced-Functions" link="/Advanced-Functions/Logarithmic-&-Exponential-Functions" unit="Logarithmic & Exponential Functions"/> )} />
      <Route path="/Advanced-Functions/Trigonometry" render= {(props) => ( <App subject="Advanced Functions" subjectlink="/Advanced-Functions" link="/Advanced-Functions/Trigonometry" unit="Trigonometry"/> )} />
      <Route path="/Advanced-Functions/Trigonometric-Equations-and-Identities" render= {(props) => ( <App subject="Advanced Functions" subjectlink="/Advanced-Functions" link="/Advanced-Functions/Trigonometric-Equations-and-Identities" unit="Trigonometric Equations & Identities"/> )} />
      <Route path="/Advanced-Functions/Rates-of-change" render= {(props) => ( <App subject="Advanced Functions" subjectlink="/Advanced-Functions" link="/Advanced-Functions/Rates-of-change" unit="Rates of change"/> )} />
      <Route path="/Advanced-Functions/Rational-Functions" render= {(props) => ( <App subject="Advanced Functions" subjectlink="/Advanced-Functions" link="/Advanced-Functions/Rational-Functions" unit="Rational Functions"/> )} />
    <Route path="/Functions" exact component={FunctionsSubjectPage}/>
      <Route path="/Functions/Characteristics Of Functions" render= {(props) => ( <App subject="Functions" subjectlink="/Functions" link="/Functions/Characteristics Of Functions" unit="Characteristics Of Functions"/> )} />
      <Route path="/Functions/Exponential Functions" render= {(props) => ( <App subject="Functions" subjectlink="/Functions" link="/Functions/Exponential Functions" unit="Exponential Functions"/> )} />
      <Route path="/Functions/Discrete Functions" render= {(props) => ( <App subject="Functions" subjectlink="/Functions" link="/Functions/Discrete Functions" unit="Discrete Functions"/> )} />
      <Route path="/Functions/Trigonometric Functions" render= {(props) => ( <App subject="Functions" subjectlink="/Functions" link="/Functions/Trigonometric Functions" unit="Trigonometric Functions"/> )} />
    <Route path="/Tutor" exact component={Tutor}/>
    <Route path="/Login" exact component={Login}/>
    <Route path="/SignUp" exact component={SignUp}/>
    <Route path="/OurJam" exact component={OurJam}/>
    


  <Footer/>
  </div>

  </React.StrictMode>
  </Switch>
  </Router>
  </AuthProvider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
