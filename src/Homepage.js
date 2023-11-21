// Homepage.js

import React from 'react';
// import './Homepage.css';
import reactLogo from "./bd.jfif";
import { Link } from 'react-router-dom';


function Homepage() {
  return (
    <div className="App">
      
      <Navbar />
      
        <div>
      <img src={reactLogo} alt="react logo" width={1500}height={700} />
      <div class="centered">WELCOME TO HOTEL MANAGEMENT SERVICE</div>
      </div>
        
      
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#rooms">Rooms</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><Link to='/LoginForm'>Login</Link></li>

      </ul>
     

    </nav>
  );
}

export default Homepage;
