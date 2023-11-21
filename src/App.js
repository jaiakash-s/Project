// App.js

import React from 'react';
import Homepage from './Homepage';
import './App.css';
import LoginForm from './Loginform';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import SignupForm from './SignupForm';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/LoginForm" element={<LoginForm />}></Route>
          <Route path="/SignupForm" element={<SignupForm />}></Route>
          
                
        </Routes>
      </Router>
    
  );
}

export default App;
