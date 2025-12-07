import React from "react";
import '../App'
const Navbar=()=>{
    return (
        <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://images.unsplash.com/photo-1496989981497-27d69cdad83e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlnaHQlMjByaW5nfGVufDB8fDB8fHww"
            className="ring"
            alt="Ring logo"
          />
        </div>
        <div className="options">
          <a href="#section0">Home</a>
          <a href="#section1">Skills</a>
          <a href="#section3">Projects</a>
          <a href="section4">More</a>
        </div>
      </nav></>
        
    )
}

export default Navbar;
