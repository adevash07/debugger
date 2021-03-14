import React from 'react';
import ParticleWrapper from '../about/particle/ParticleComponent'
import Social from '../social/socialComponent';
import "./homeComponent.scss";

const Home = () =>  {
    return (
        <div className="home" id="home">
            <ParticleWrapper />
            <div className="inner">
                <div className="name">
                    <h1>ADEYEMI IBRAHIM <br />
                        <span>Web & Software Developer</span>
                        
                        
                        </h1>
                    <span className="imgOuter">
                        <span className="imgInner"></span>
                    </span>
                </div>
                <div className="btn">
                    
                    <a href="#a"><button className="btn_button" style={{marginRight:"20%"}}>Download CV</button></a>
                    
                    <a href="#contact"><button className="btn_button" style={{marginLeft: "20%"}}>Contact ME</button></a>
                </div>
            </div>
            <div className="buttom">
                <Social />
                <div className="swipe"></div>
            </div>
        </div>
    );
}

export default Home;