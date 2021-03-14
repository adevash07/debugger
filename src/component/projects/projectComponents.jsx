import React from 'react';
import pro from '../../assets/project.svg';
import res from '../../assets/DinenWine.svg';
import square from '../../assets/Oke-clothings.svg';
import square1 from '../../assets/Robofriends.svg';
import Skills from '../skills/skillsComponent';

import './projectComponent.scss';

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="imgpro">
                <div className="mypro">
                    <img src={pro} alt="My Projects" className="res" style={{width:"50%"}}></img>
                </div>
                <a href="https://adevash07.github.io/DineNWine" className="MainP">
                    <img className="big" src={res} alt="project demo 1" style={{ width: "100%"}}></img>
                </a>
                
                
                
                
                <div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={square} alt="project demo 2" className="small1" style={{ width: "100%", objectFit:"fill" }}></img></div>
                            <a href="https://adevash07.github.io/Oke-clothings" className="flip-card-back">
                                <div className="link-add">
                                    <div className="add">
                                        <div>
                                            <p>Project Name : Oke-Clothings</p>
                                            <p>Description: <span> Fashion shopping site with hot trends</span></p> 
                                        </div>
                                        <div>
                                            <button href="">Click here to visit site</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={square1} alt="project demo 3" className="small2" style={{ width: "100%", objectFit: "fill" }}></img></div>
                            <a href="https://adevash07.github.io/robofriends" className="flip-card-back">
                                <div className="link-add">
                                    <div className="add">
                                        <div>
                                            <p>Project Name : RoboFriends</p>
                                            <p>Description: <span> A cross match of robot from the movie "Star Wars"</span></p>
                                        </div>
                                        <div className="btn">
                                            <button className="btn_button" href="#">Click here to visit site</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    
                </div>
            </div>
            <Skills />
        </div>
    )
}

export default Projects;