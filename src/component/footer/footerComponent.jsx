import React from 'react';


import Social from '../social/socialComponent'

import './footerCompenent.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="content">
                <div className="me"></div>
                <div className="flex madeBy">
                    <p>Made By <span className="trans_color">Adeyemi Ibrahim <br />
                    Web & Software Developer</span><br />
                    <span className="copy">&copy;</span> <span>Ibrahim Adeyemi - 2020</span>
                    </p>
                </div>
                <Social />
            </div>
        </div>
    )
}

export default Footer;