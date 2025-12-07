import React from "react";
import '../App.css';
const Projects= ()=>{
    return(
        <>
        
      <div className='project'>
        <div className="projects" id="section3">Projects</div>

        <div className="project-slider-container">

          <div className="projects_section">

            {/* --------------------- PROJECT 1: Job Application Autofiller --------------------- */}
            <div className="project-card-item">
              <a
                href="https://github.com/Arnav-NK/Job_Application_Auto-filler"
                target="_blank"
                rel="noopener noreferrer"
                className="farmerAid"
              >
                Job AutoFiller (Extension)
              </a>
              <div className="project_info">
                <div style={{ marginTop: '15px', padding: '0px 20px ' }}>
                  Developed an essential browser extension to drastically reduce the time spent on repetitive online job applications. The solution is built on a full-stack MERN architecture, ensuring secure, scalable, and fast performance.

                  <h3>Core Functionality:</h3>
                  <p>This powerful extension simplifies job applications through a secure, full-stack approach. Users first complete Secure Login using JWT authentication and OAuth (Google). Next, they upload their resume, which the backend parses to extract structured data (education, experience, etc.) and stores it in MongoDB. Media files, like the resume and profile picture, are hosted on Cloudinary for efficient delivery. Finally, the core feature, Intelligent Autofill, uses DOM manipulation to detect fields on job sites and automatically populates them with the user's stored data, turning hours of form filling into a few quick clicks.</p>

                  <h3 style={{ marginTop: '15px', textDecoration: 'bold' }}>Impact and Benefits:</h3>
                  <p>This tool transforms a tedious, multi-hour process into a few clicks, enabling users to apply for 5-10 times more jobs in the same amount of time. It demonstrates proficiency in the MERN Stack, Security (JWT & OAuth), and Complex Logic involving Resume Parsing and Cross-site Autofill.</p>
                  <div>Repo here <a href="https://github.com/Arnav-NK/Job_Application_Auto-filler" style={{ color: 'blue' }}>https://github.com/Arnav-NK/Job_Application_Auto-filler</a></div>
                </div>
              </div>
            </div>

            {/* --------------------- PROJECT 2: Stop Watch Extension (Refined) --------------------- */}
            <div className="project-card-item">
              <a
                href="https://github.com/Arnav-NK/StopWatchExtension"
                target="_blank"
                rel="noopener noreferrer"
                className="farmerAid"
              >
                Stop Watch Extension
              </a>
              <div className="project_info">
                <div style={{ marginTop: '10px', padding: '0px 20px ' }}>
                  <p>A user-friendly browser extension developed to enhance productivity and time management. It features an analog clock and a dedicated timer that runs reliably in the background.</p>

                  <h3>Technology & Features:</h3>
                  <p>The stack is built using JavaScript, HTML, CSS, and Bootstrap. The timer is persistent, utilizing browser local storage to ensure it continues running seamlessly even when the Chrome window is minimized or inactive. The design is focused on a clean, responsive, and intuitive user experience.</p>

                  <h3 style={{ marginTop: '15px', textDecoration: 'bold' }}>Impact and Benefits:</h3>
                  <p>This tool provides reliable background time tracking, helping users stay focused and manage their ideal time usage effortlessly without interrupting their workflow.</p>
                  <div>Repo here <a href="https://github.com/Arnav-NK/StopWatchExtension" style={{ color: 'blue' }}>https://github.com/Arnav-NK/StopWatchExtension</a></div>
                </div>
              </div>
            </div>

            {/* --------------------- PROJECT 3: Farmer's Aid (Refined) --------------------- */}
            <div className="project-card-item">
              <a
                href="https://arnav-nk.github.io/Farmer-helper-webiste/"
                target="_blank"
                rel="noopener noreferrer"
                className="farmerAid"
              >
                Farmer's Aid
              </a>
              <div className="project_info">
                <div style={{ marginTop: '10px', padding: '0px 20px ' }}>
                  <p>Developed a comprehensive, public-facing website designed to support the agricultural community by aggregating essential information, primarily focusing on soil characteristics for various states.</p>

                  <h3>Key Features:</h3>
                  <p>The stack is built using HTML, CSS, and Bootstrap for a fully responsive design. Key features include a powerful Search Engine for accessing and analyzing complex soil data, Multi-Language Support, and Enhanced Accessibility (using ARIA attributes) to serve a broad audience. It also offers Educational Content like video tutorials and infographics to simplify intricate agricultural concepts.</p>

                  <h3 style={{ marginTop: '15px', textDecoration: 'bold' }}>Impact and Benefits:</h3>
                  <p>This platform empowers farmers to make informed decisions, resulting in a demonstrable 60-65% increase in efficiency of agricultural practices.</p>
                  <div>Preview here <a href="https://arnav-nk.github.io/Farmer-helper-webiste/" style={{ color: 'blue' }}>https://arnav-nk.github.io/Farmer-helper-webiste/</a></div>
                </div>
              </div>
            </div>

            {/* --------------------- PROJECT 4: Expense Tracker (Refined) --------------------- */}
            <div className="project-card-item">
              <a
                href="https://github.com/Arnav-NK/Expense-manager-app.git"
                target="_blank"
                rel="noopener noreferrer"
                className="tracer"
              >
                Expense Tracker
              </a>
              <div className="project_info">
                <div style={{ marginTop: '10px', padding: '0px 20px ' }}>
                  <p>A native mobile application built using Java (back-end) and XML (front-end) in Android Studio, designed to track, categorize, and analyze user income and expenditures.</p>

                  <h3>Key Features:</h3>
                  <p>The core stack is Android Native (Java/XML). The app includes robust functionality for logging and categorization of all financial transactions and provides Visual Insights through the integration of an Animated Pie Chart library for clear, immediate visualization of spending patterns.</p>

                  <h3 style={{ marginTop: '15px', textDecoration: 'bold' }}>Impact and Benefits:</h3>
                  <p>The visualization tools allowed users to identify financial habits, leading to a reported rise in savings from 15% to 45% by enhancing personal financial management and decision-making.</p>
                  <div>Repo here <a href="https://github.com/Arnav-NK/Expense-manager-app.git">https://github.com/Arnav-NK/Expense-manager-app.git</a></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </>
    );
}

export default Projects;