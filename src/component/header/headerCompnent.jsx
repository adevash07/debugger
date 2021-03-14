import React from 'react';
import logo from '../../assets/logo.svg';
import './headerComponent.style.scss';
import Toggler from '../toggler/togglerCompoent.jsx';
import Modal from '../../component/modalComponent/modalComponent';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked : false
    }
    
    this.colorChange = this.colorChange.bind(this);
    this.animate = this.animate.bind(this);
    this.modalTurnONOFF = this.modalTurnONOFF.bind(this);
    this.stateSwicher = this.stateSwicher.bind(this);
  }

  colorChange() {
      if (document.body.scrollTop >= 70 || document.documentElement.scrollTop >= 70) {
        document.getElementById("header").classList.add("purple");
      } else {
        document.getElementById("header").classList.remove("purple");
      }
    }
  
    stateSwicher() {
    this.setState({ clicked: !this.state.clicked });
      console.log("state has been switched");
      this.animate();
      this.modalTurnONOFF();
  }

  modalTurnONOFF() {
   if ( this.state.clicked ) {
     document.getElementById("mobileNav").classList.add("show");
     console.log("modal has been on")
    } else {
     document.getElementById("mobileNav").classList.remove("show");
    }
  }


  animate() {
    let btn1 = document.getElementById("toggler-btn1");
    let btn2 = document.getElementById("toggler-btn2");
    let btn3 = document.getElementById("toggler-btn3");
    let btn4 = document.getElementById("toggler-btn4");
    if (this.state.clicked) {



      btn4.classList.add("moveUp");
      btn1.classList.add("moveDown");

      setTimeout(() => {
        btn2.style.display = "none";
        btn3.style.display = "none";
        btn1.style.animationPlayState = "paused";
        btn4.style.animationPlayState = "paused";
      }, 1999);
    } else {
      btn1.style.animationPlayState = "running";
      btn4.style.animationPlayState = "running";


      btn1.classList.remove("moveDown");
      btn4.classList.remove("moveUp");

      btn2.style.display = "block";
      btn3.style.display = "block";

    }

  }

    componentDidMount() {
      const self = this; 
      window.onscroll = function () {
        self.colorChange();
      };
      document.getElementById("toggler").addEventListener("click", self.stateSwicher);
      console.log("toggler has been fectched")
    }
  
    render() {
      return (
        <div className="header" id="header">
          <Modal />
          <nav className="nav">
            <div className="img"><img id='logo' src={logo} alt="debugger" style={{ width: "4rem" }} /></div>
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
}

export default Header;