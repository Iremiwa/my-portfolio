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
      <div className="about-section">

        <div className="row">
        <div className = "col">
              <h3>About Me</h3>
            <p className= "about-me-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              ut reiciendis quos eos autem repudiandae earum? Ut officiis velit
              magni possimus libero impedit veniam quod beatae! Soluta, earum?
              Corporis, voluptate.
            </p>
            </div>
              
            <div className = "col">
              <p className = "skill">
            <h3>Skills</h3>
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

            <p className = "skill">
            
                <IconContext.Provider value={{ color: "gold", className: "global-class-name" }}  />
                Express
                </p>
             </div>

              </div>
   
       

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,160L1440,224L1440,320L0,320Z"></path></svg>

      </div>
      
    </React.Fragment>
  );
}

export default AboutMe;
