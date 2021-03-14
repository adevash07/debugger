import React from 'react';
import git from '../../assets/LogoGit.svg';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import boot from '../../assets/boot.svg';
import react from '../../assets/react.svg';
import sass from '../../assets/sass.svg';
import figma from '../../assets/figma.svg';
import js from '../../assets/js.svg';
import api from '../../assets/api.svg';
import npm from '../../assets/npm.svg';
import hero from '../../assets/heroku.svg';



import './skillsComponent.scss';

const Skills = () => {
    return (
        <div className="skills">
            <h2>Skills</h2><hr />

            <div className="skillList">
                <img src={html} alt="a" className="equalWidth"></img>
                <img src={css} alt="b" className="equalWidth"></img>
                <img src={js} alt="c" className="equalWidth"></img>
                <img src={figma} alt="d" className="equalWidth"></img>
                <img src={sass} alt="e" className="equalWidth"></img>
                <img src={api} alt="f" className="equalWidth"></img>
                <img src={git} alt="g" className="equalWidth"></img>
                <img src={boot} alt="h" className="equalWidth"></img>
                <img src={react} alt="i" className="equalWidth"></img>
                <img src={npm} alt="g" className="equalWidth"></img>
                <img src={hero} alt="h" className="equalWidth"></img>
                
            </div>
        </div>
    )
}

export default Skills;