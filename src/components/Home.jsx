import React from 'react';
import '../App.css';
const Home = () => {
    return (
        <>
        <div className="container" id="section0">
        <div className="subcontainer">
          <div className="name">ARNAV</div>
          <div className="information">
            I’m an Information Technology student at IIIT Gwalior with a strong programming foundation built through solving 500+ LeetCode problems. I primarily code in Java and enjoy creating clean, efficient, and impactful solutions to real-world problems. I’m always exploring new technologies and looking to grow through meaningful opportunities in the tech industry. Welcome to my portfolio!
          </div>
        </div >
        <a href="https://www.linkedin.com/in/arnav-khond/" target='_blank'>
          <img src="/assets/profpic.jpg" className="portrait" alt="Picture" /></a>
      </div>
        </>
    );
}

export default Home;
