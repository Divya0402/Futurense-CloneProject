import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const yellowInitial = { backgroundColor: "#FDBA2F", color: "#000000" };
const yellowMid = {backgroundColor: "#FDBA2F" ,color: "#ffffff"};
const yellowFinal = {backgroundColor: "#000000" ,color: "#ffffff", borderColor: "#FDBA2F", borderRadius: "7px"};
const transparentInitial = { backgroundColor: "transparent", color: "#ffffff", borderColor: "#ffffff", borderRadius: "7px" };
const transparentFinal = { backgroundColor: "#FDBA2F", color: "#000000", borderColor: "#ffffff", borderRadius: "7px" };

export default function Navbar({reference}) {

  const upskillNowNavRef = useRef(null);
  const upskillNowNavRippleRef = useRef(null);

  const upskillNowNavHandleClick = (event) => {
    const upskillNowNav = upskillNowNavRef.current;
    const upskillNowNavRipple = upskillNowNavRippleRef.current;
    const upskillNowNavRect = upskillNowNav.getBoundingClientRect();
    const {left, top} = upskillNowNavRect;
    const upskillNowNavLeftPosition = event.clientX - left;
    const upskillNowNavTopPosition = event.clientY - top;
    upskillNowNavRipple.style.left = upskillNowNavLeftPosition + "px";
    upskillNowNavRipple.style.top = upskillNowNavTopPosition + "px";
    upskillNowNavRipple.classList.add("upskillNowNavActive");
    setTimeout(() => {
      upskillNowNavRipple.classList.remove("upskillNowNavActive");
    },1000);
    setColor(yellowMid);
    setTimeout(() => {
      setColor(yellowFinal);
    },600);
  }

  const upskillNowNavHandleClickRemove = () => {
    const upskillNowNavRipple = upskillNowNavRippleRef.current;
    setColor(yellowInitial);
    upskillNowNavRipple.classList.remove("upskillNowNavActive");
  }

  const hireNowNavRef = useRef(null);
  const hireNowNavRippleRef = useRef(null);

  const hireNowNavHandleClick = (event) => {
    const hireNowNav = hireNowNavRef.current;
    const hireNowNavRipple = hireNowNavRippleRef.current;
    const hireNowNavRect = hireNowNav.getBoundingClientRect();
    const {left, top} = hireNowNavRect;
    const hireNowNavLeftPosition = event.clientX - left;
    const hireNowNavTopPosition = event.clientY - top;
    hireNowNavRipple.style.left = hireNowNavLeftPosition + "px";
    hireNowNavRipple.style.top = hireNowNavTopPosition + "px";
    hireNowNavRipple.classList.add("hireNowNavActive");
    setTimeout(() => {
      hireNowNavRipple.classList.remove("hireNowNavActive");
    },1000);
    setColour(transparentInitial);
    setTimeout(() => {
      setColour(transparentFinal);
    },600);
  }

  const hireNowNavHandleClickRemove = () => {
    const hireNowNavRipple = hireNowNavRippleRef.current;
    setColour(transparentInitial);
    hireNowNavRipple.classList.remove("hireNowNavActive");
  }

  const handleToggler = ()=>{
    if (toggler === false) {
      setToggler(true);
    } else {
      setToggler(false);
    }
  }

  const handleTogglerContent = ()=>{
    setToggler(false);
  }

  const handleTogglerAboutContent = ()=>{
    setToggler(false);
    reference.current.scrollIntoView({behavior:"smooth"});
    
  }

  const [color, setColor] = useState(yellowInitial);
  const [colour, setColour] = useState(transparentInitial);
  const [toggler, setToggler] =useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#05010E" }}>
      <div className="container-fluid">
        <Link className="navbar-brand mx-3" to="/" onClick={handleTogglerContent}>
          <img src="logo.jpg" alt="logo" style={{ height: "40px", width: "40px" }} />
        </Link>
        <button onClick={handleToggler} style={{marginRight:"20px"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="#navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="#navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" >
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: "#ffffff" }}>Home</Link>
            </li>
            <li className="nav-item" onClick={handleTogglerAboutContent}>
              <Link className="nav-link" to="#" style={{ color: "#ffffff" }}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/blogs" style={{ color: "#ffffff" }}>Blogs</Link>
            </li>
          </ul>
          <div>
            <button className="btn me-2 upskillNowNav" ref={upskillNowNavRef} type="button" onMouseEnter={upskillNowNavHandleClick} onMouseLeave={upskillNowNavHandleClickRemove} style={color}>
              <span className="upskillNowNavText">Upskill Now</span>
              <span ref={upskillNowNavRippleRef} className="upskillNowNavRippleEffect"></span>
            </button>
          </div>
          <div>
            <button className="btn me-2 hireNowNav" ref={hireNowNavRef} type="button" onMouseEnter={hireNowNavHandleClick} onMouseLeave={hireNowNavHandleClickRemove} style={colour}>
              <span className="hirelNowNavText">Hire Now</span>
              <span ref={hireNowNavRippleRef} className="hireNowNavRippleEffect"></span>
            </button>
          </div>
        </div>
      </div>
      <div>
        {
          toggler?<div style={{width:"100vw"}}>
            <ul className="navbar-nav" style={{padding:"0 20px"}}>
              <li className="nav-item" onClick={handleTogglerContent}>
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "#ffffff" }}>Home</Link>
              </li>
              <li className="nav-item" onClick={handleTogglerAboutContent}>
                <Link className="nav-link" to="#" style={{ color: "#ffffff" }}>About</Link>
              </li>
              <li className="nav-item" onClick={handleTogglerContent}>
                <Link className="nav-link active" aria-current="page" to="/blogs" style={{ color: "#ffffff" }}>Blogs</Link>
              </li>
            </ul>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center",padding:"0 20px"}}>
              <button className="btn togglerInsideBtn" type="button" onClick={handleTogglerContent} onMouseEnter={() => setColor(transparentInitial)} onMouseLeave={() => setColor(yellowInitial)} style={color}>Upskill Now</button>
              <button className="btn togglerInsideBtn" type="button" onClick={handleTogglerContent} onMouseEnter={() => setColour(yellowInitial)} onMouseLeave={() => setColour(transparentInitial)} style={colour}>Hire Now</button>
            </div>
          </div>:null
        }
      </div>
        
    </nav>
  );
}
