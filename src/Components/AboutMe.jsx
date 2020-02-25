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

        <table className="table table-borderless table-responsive">
          <tbody>

            <tr>
              <td className= "about-me-text">
              <h3>About Me</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              ut reiciendis quos eos autem repudiandae earum? Ut officiis velit
              magni possimus libero impedit veniam quod beatae! Soluta, earum?
              Corporis, voluptate.
            </p>
          
              </td>

              <td>
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
              </td>

            </tr>
          </tbody>
   
        </table>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="white"
            fill-opacity="1"
            d="M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,154.7C672,171,768,181,864,186.7C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
    </React.Fragment>
  );
}

export default AboutMe;
