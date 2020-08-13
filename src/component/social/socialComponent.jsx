import React from 'react';
import './socialComponent.scss';
import link from '../../assets/link.svg'
import twiiter from '../../assets/twitter.svg';
import git from '../../assets/git.svg';
import email from '../../assets/e-mail.svg';

const Social = () => {
    let Git =  'https//:facebook.com';
    let Link = 'https//:facebook.com';
    let Twitter = 'https//:facebook.com';
    return (
        <div className="social">
            <a href={Link}><img src={email} alt="E-mail" className="purplemail" /></a>
            <a href={Git}><img src={git} alt="github link"/></a>
            <a href={Link}><img src={link} alt="linkedin" /></a>
            <a href={Twitter}><img src={twiiter} alt="twitter" /></a>
            
        </div>
    )
}


export default Social;