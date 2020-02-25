import React from "react";
import "../Styles/Portfolio.css";
import InstabillMockup from "../Images/instabillMockup.png";
import quizAppMockup from "../Images/quizAppMockup.png";
import newsSearchMockup from "../Images/newsSearchMockup.png";
import bookFinderMockup from "../Images/bookFinderMockup.png";
import gifFinderMockup from "../Images/gifFinderMockup.png";
import todoListMockup from "../Images/todoListMockup.png";

function Portfolio() {
  return (
    <React.Fragment>
      <div className="portfolio-section">
        <h1>Portfolio</h1>

        <div className="portfolio">
          

          <table className="table table-borderless" />
          <tbody>
            <tr>
              <td className="mockup-section">
                <img src={InstabillMockup} className="mockup" />
                <h3>Instabill</h3>
                <p className="mockup-description">
                  An Invoice generating web application developed with MERN
                  (MongoDB, Express, React, NodeJS) Stack. It allows generate
                  digital invoice eliminating the need for hard invoices.
                </p>
              </td>

              <td className="mockup-section">
                <img src={quizAppMockup} className="mockup" />
                <h3>GOT Quiz Application</h3>
                <p className="mockup-description">
                  A quiz application developed with HTML, CSS and JavaScript. It randomly 
                  picks from a pool of questions and then calculates the players's total score.
                </p>
              </td>
            </tr>

            <tr>
              <td className="mockup-section">
                <img src={newsSearchMockup} className="mockup" />
                <h3>News Search</h3>
                <p className="mockup-description">
                  Using the New York Times Api, this application allows for users to enter keywords and then 
                  renders news items associated with the keyword. Developed with HTML, CSS, JavaScript, Jquery.
                </p>
              </td>

              <td className="mockup-section">
                <img src={bookFinderMockup} className="mockup" />
                <h3>Virtual Library</h3>
                <p className="mockup-description">
                  This application gets books from google books and allows users to  preview any book of their choice.
                </p>
              </td>
            </tr>

            <tr>
              <td className="mockup-section">
                <img src={gifFinderMockup} className="mockup" />
                <h3>GIF Finder</h3>
                <p className="mockup-description">
                  GIF Finder provides an input field where the user specifies a category of GIFs
                  and then the application renders 10 GIFs.
                </p>
              </td>

              <td className="mockup-section">
                <img src={todoListMockup} className="mockup" />
                <h3>Todo List</h3>
                <p className="mockup-description">
                  The Todo List application takes a users todos. It allows users to create, add and delete todo items. Developed with 
                  HTML, CSS and Javascript.
                </p>
              </td>
            </tr>
          </tbody>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Portfolio;
