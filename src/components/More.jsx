import React from 'react';
import '../App.css';
const More = () => {
    return (
        <>
            <div className="more" id='section4'>
                About me
            </div>
            <section className="about-section">
                <div className="about-container">

                    {/* Card 1 - Basic Info */}
                    <div className="about-card">
                        <h2>Hey There</h2>
                        <p>
                            I’m a passionate <strong>Information Technology undergraduate at IIIT Gwalior</strong>
                            with a strong interest in <strong>software development, problem-solving, and building
                                real-world applications</strong>. I primarily work with <strong>Java</strong> and enjoy
                            crafting clean, scalable, and efficient solutions.
                        </p>
                        <p>
                            Along with technical skills, I bring strong <strong>leadership, team management, and
                                communication abilities</strong>. I’m driven by curiosity, consistency, and the ambition
                            to create impactful technology.
                        </p>
                    </div>

                    {/* Card 2 - Education */}
                    <div className="about-card">
                        <h2>Education</h2>

                        <div className="edu-item">
                            <h4>B.Tech in Information Technology</h4>
                            <p>IIIT Gwalior</p>
                            <span>CGPA: 8.0 / 10</span>
                        </div>

                        <div className="edu-item">
                            <h4>Higher Secondary (Class 12)</h4>
                            <p>Kendriya Vidyalaya, Chandrapur</p>
                            <span>91.8%</span>
                        </div>

                        <div className="edu-item highlight">
                            <h4>JEE Mains 2023</h4>
                            <span>99 Percentile</span>
                        </div>
                    </div>

                    {/* Card 3 - Achievements */}
                    <div className="about-card">
                        <h2>Achievements & Leadership</h2>

                        <ul>
                            <li> 450+ LeetCode Problems Solved (Rating: 1712)</li>
                            <li> 4 ⭐ CodeChef Coder</li>
                            <li> 🏆 Event Organizer – TWARAN Inter-IIIT 2025 (2000+ Participants)</li>
                            <li> 🧑‍💼 Executive Member – Student Activity Council, IIIT Gwalior</li>
                            <li> ⚡ Event Organizer – URJA (Intra-IIIT Sports Fest)</li>
                        </ul>
                    </div>

                </div>
            </section>
            <div className="contact-section-container">
                <div className="skill" id="section1">Get in Touch</div>
                <div className="contact-container">
                    <div className="cont1">
                        <div className="contact-item">
                            <span className="contact-label">Codeolio</span>
                            <span className="contact-value">https://codolio.com/profile/Arnav_NK</span>
                        </div>

                        <div className="contact-item">
                            <span className="contact-label">📧 Email</span>
                            <span className="contact-value">arnavkhond4oct@gmail.com</span>
                        </div>

                        <div className="contact-item">
                            <span className="contact-label">🎮 Discord</span>
                            <span className="contact-value">RUSTIC #arnav_nk</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default More;