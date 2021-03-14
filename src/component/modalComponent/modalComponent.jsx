import React from 'react';
import logo from '../../assets/logo.svg';
import './modalComponent.scss';

const Modal = () => {

    return (
        <div className="mobileNav" id="mobileNav">
                <nav className="modalNav">
                    <div className="img"><img id='logo' src={logo} alt="debugger" style={{ width: "6rem" }} /></div>
                    <div className="list">
                        <ul className='links'>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#blog">Blog</a></li>
                        </ul>
                    </div>
                </nav>
        </div>
        
    )
}

export default Modal;
