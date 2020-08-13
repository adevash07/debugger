import React from 'react';
import pro from '../../assets/project.svg';
import res from '../../assets/res.svg';
import square from '../../assets/square1.svg';
import square1 from '../../assets/square2.svg';
import Skills from '../skills/skillsComponent';

import './projectComponent.scss';

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="imgpro">
                <img src={pro} alt="My Projects" className="res" style={{width:"30%"}}></img>
                <img src={res} alt="project demo 1" className="big" style={{width:"85%"}}></img>
                <div style={{ width: "85%" }}>
                    <img src={square} alt="project demo 2" className="small1" style={{ width: "49%" }}></img>
                    <img src={square1} alt="project demo 3" className="small2" style={{ width: "49%" }}></img>
                </div>
            </div>
            <Skills />
        </div>
    )
}

export default Projects;