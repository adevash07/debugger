import React from 'react';
import phone from '../../assets/phone.svg';
import conEmail from '../../assets/conemail.svg';

import './contactComponent.scss';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact Me</h2><hr />

            <ul className='contactLinks'>
                <li><a href="#home"><img src={phone} alt="My E-mail address" /> <span>+2348186591479</span></a></li>
                <li><a href="#about"><img src={conEmail} alt="My Phone number" /><span>adeyemiibrahim223@gmail.com</span></a></li>
                
                <div className="leave">
                    <h3> OR </h3>
                    <h4>Leave Me a Direct Message</h4>
                </div>

                <form>
                    <input type="text" name="name" className="name" placeholder="What is your name" align="bottom" required /><br />
                    <input type="email" name="email" className="email" placeholder="Youremailaddress@abc.com" required /><br />
                    <textarea type="textarea" name="message" className="textarea" rows="10" placeholder="nothing" required /><br />
                    <input type="submit" className="submit" value="SEND" />
                </form>

            </ul>  
        </div>
    )
}

export default Contact