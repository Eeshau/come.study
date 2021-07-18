import React from 'react'
import './Header.css'
import logo from './images/Logo.png'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Page2 from './pages/subject';
import {Link} from 'react-router-dom';

const Header = () => (

    <div className="Header">
      <div className="HeaderGroup">
      <Link to='/'><img src={logo} width="300"></img></Link>
        <Link to='/OurJam'>Our Jam</Link>
        <Link to='/'>Math</Link>
        <Link to='/Tutor'>Tutor</Link>
        <Link to='/Login'><button>Login</button></Link>
      </div>
    </div>

  )
 
  export default Header