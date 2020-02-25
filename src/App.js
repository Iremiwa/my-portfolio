import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import SocialNetwork from "./Components/SocialNetwork";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
       
        <div className="header-section">
          <Navbar />
          <div className="row">
            <div className = "col-2">
            <SocialNetwork />
            </div>
            <div className = "col">
            <div className="header-text">
          <p>Hi</p>
          <p>I am Iretomiwa Soladoye</p> 
          <p> Software Developer</p>
          <button type="button" class="btn btn-warning">Hire Me!</button>
        </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="whitesmoke" fill-opacity="1" d="M0,64L48,53.3C96,43,192,21,288,10.7C384,0,480,0,576,26.7C672,53,768,107,864,117.3C960,128,1056,96,1152,112C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>


          
          </div>

          <AboutMe />
          <Portfolio />

        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
