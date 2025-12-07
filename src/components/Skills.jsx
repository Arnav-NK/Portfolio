import React from "react";
import '../App.css';
import Card from "./Card.jsx";
const Skills = () => {
    return (
        <>
            <div className="skill" id="section1">Skills</div>
            <div className="skills_section">
                <Card title="Technical Skills" type="tech" />
                <Card title="Soft Skills" type="soft" />
                <Card title="Languages" type="langs" />
            </div></>
    );
}
export default Skills;