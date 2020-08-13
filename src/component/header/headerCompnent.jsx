import React from 'react';
import logo from '../../assets/logo.svg';
import './headerComponent.style.scss';
import Toggler from '../toggler/togglerCompoent.jsx';

const Header = () => {

  const colorChange = () => {
    if (document.body.scrollTop >= 70 || document.documentElement.scrollTop >= 70) {
      document.getElementById("header").classList.add("purple");
      document.getElementById("logo").classList.add("squeeze");
    } else {
      document.getElementById("header").classList.remove("purple");
      document.getElementById("logo").classList.remove("squeeze");
    }
  }

  window.onscroll = function () { colorChange() };
    return (
        <div className="header" id="header">
            <nav className="nav">
              <div className="img"><img id='logo' src={logo} alt="debugger" style={{width: "4rem"}} /></div>
              <div className="list">
                  <ul className='links'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#blog">Blog</a></li>
                  </ul>
                </div>
              <Toggler />
            </nav>
        </div>  
        )
}

export default Header;