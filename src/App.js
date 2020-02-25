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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="whitesmoke" fill-opacity="1" d="M0,160L1440,224L1440,320L0,320Z"></path></svg>

          
          </div>

          <AboutMe />
          <Portfolio />

        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
