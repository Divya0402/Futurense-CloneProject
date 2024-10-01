//import logo from './logo.svg';
import React, {useRef} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Blogs from './Components/HomePage/Blogs';

function App() {
  
  const aboutRef = useRef(null);

  

  return (
    <>
    <Router>
      <Navbar reference={aboutRef} />
      <div>
      <Routes>
        <Route exact path='/' element={<HomePage ref={aboutRef} />} />
        <Route exact path='/blogs' element={<Blogs/>}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;


/*import React from 'react'

function $1() {
  return <div>$0</div>
}

export default $1*/




