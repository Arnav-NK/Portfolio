import React from "react";
import '../App.css';
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="cpy">Copyright ©ArnavNk 2024</div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/arnav-khond/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/linkdin.png" className="i1" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/Arnav-NK" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/github-logo.png" className="i2" alt="GitHub" />
                    </a>
                    <a href="mailto:arnavkhond4oct@gmail.com">
                        <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" className="i3" alt="Email" />
                    </a>
                </div>
            </footer></>
            );
}

export default Footer;
