import React from 'react';
import phone from '../../assets/phone.svg';
import conEmail from '../../assets/conemail.svg';
import emailjs from 'emailjs-com';

import './contactComponent.scss';

const Contact = () => {
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_29p81ad', e.target, 'user_fEueVQeSACwnF7mjUuWIU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        document.getElementById("myForm").reset();
       document.getElementById("sent").style.visibility = "visible";

        setTimeout(() => {
            document.getElementById("sent").style.visibility = "hidden";
        }, 3000);
    }
    
    return (
        <div className="contact" id="contact">
            <h2>Contact Me</h2><hr />

            <ul className='contactLinks'>
                <li><a href="#home"><img src={phone} alt="My E-mail address" /> <span>+2348186591479</span></a></li>
                <li><a href="#about"><img src={conEmail} alt="My Phone number" /><span>adeyemiibrahim223@gmail.com</span></a></li>
                
                <div className="leave">
                    <h3> OR </h3>
                    <h4>Leave Me a Direct Message</h4>
                    <h4 className="whatsUp">What’s Up?, let connect</h4>

                    <div id="sent" className="sent"><p>Mail Sent!, talk soon.</p></div>
                </div>

                <form id="myForm" onSubmit={sendEmail} >
                    <input type="text" name="from_name" className="name" placeholder="What is your name" align="bottom" required /><br />
                    <input type="email" name="reply_to" className="email" placeholder="Youremailaddress@abc.com" required /><br />
                    <textarea type="textarea" name="message" className="textarea" rows="10" placeholder="High heels historically were predominantly wore by men in early 1700s" required /><br />
                    <input  type="submit" className="submit" value="SEND" />
                </form>

            </ul>  
        </div>
    )
}

export default Contact