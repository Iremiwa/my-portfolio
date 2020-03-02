import React from "react";
import "../Styles/AboutMe.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaExpress
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaStar,  FaStarHalf } from "react-icons/fa";
import { IconContext } from 'react-icons';

function AboutMe() {
  return (
    <React.Fragment>
      <div className="aboutme">

        <div className="row">
        <div className = "col">
              <h2>About Me</h2>
            <p className= "about-me-text">
            A problem solver with a knack for providing workable and realistic solutions through technology. Searching for opportunities in software development to utilize my skills while expanding my knowledge and contributing to the success of the organisation.
            </p>
            </div>
              
            <div className = "col">
              <p className = "skill">
            <h2>Skills</h2>
                <div className="row">
                    <div className="col">
              <FaHtml5 className="icons" />
              HTML
              </div>
              

              
              <div className="col">
              <IconContext.Provider value={{ color: "gold", className: "global-class-name" }}  >
                <div className="star-section">
              <FaStar className="star-icon"  /><FaStar className="star-icon" /><FaStar className="star-icon" /><FaStar className="star-icon" /><FaStar className="star-icon" />
              </div>
              </IconContext.Provider>
              </div>
              </div>
            </p>

            <p className = "skill">
            <div className="row">
                    <div className="col">
              <FaCss3Alt className="icons" />
              CSS
              </div>
              <div className="col">
              <IconContext.Provider value={{ color: "gold", className: "global-class-name" }}  >
              <div className="star-section">
              <FaStar className="star-icon" /><FaStar className="star-icon" /><FaStar className="star-icon" /><FaStar className="star-icon" />
              </div>
              </IconContext.Provider>
              </div>
              </div>
            </p>

            <p className = "skill">
            <div className="row">
                    <div className="col">
              <FaReact className="icons" />
              React JS
              </div>
              <div className="col">
              <IconContext.Provider value={{ color: "gold", className: "global-class-name" }}  >
              <div className="star-section">
              <FaStar className="star-icon" /><FaStar className="star-icon" /><FaStar className="star-icon" /><FaStarHalf className="star-icon" />
              </div>
              </IconContext.Provider>
              </div>
              </div>
            </p>

            <p className = "skill">
            <div className="row">
                    <div className="col">
              <DiJavascript className="icons" />
              Javascript
              </div>
              <div className="col">
              <IconContext.Provider value={{ color: "gold", className: "global-class-name" }}  >
              <div className="star-section">
              <FaStar className="star-icon" /><FaStar className="star-icon" /><FaStar className="star-icon" />
              </div>
              </IconContext.Provider>
              </div>
              </div>
            </p>

            <p className = "skill">
            <div className="row">
                    <div className="col">
              <FaBootstrap className="icons" />

              Bootstrap
              </div>
              <div className="col">
              <IconContext.Provider value={{ color: "gold", className: "global-class-name" }}  >
              <div className="star-section">
              <FaStar className="star-icon" /><FaStar className="star-icon" /><FaStar className="star-icon" />
              </div>
              </IconContext.Provider>
              </div>
              </div>
            </p>

             </div>

              </div>
   
       

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,160L1440,224L1440,320L0,320Z"></path></svg>

      </div>
      
    </React.Fragment>
  );
}

export default AboutMe;
