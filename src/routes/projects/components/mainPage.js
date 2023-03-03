import React from "react";
import styles from "./../styles/mainPage.scss";
import { Link } from "react-router-dom";
import ccGraphic from "./../../../svg/frontPageGraphics/CC1.png";
import galleryGraphic from "./../../../svg/frontPageGraphics/AG1.png";
import mppGraphic from "./../../../svg/frontPageGraphics/MPP1.png";
import portfolioGraphic from "./../../../svg/frontPageGraphics/P1.png";
import icon from "./../../../svg/katieicon.png";

const MainPage = () => (
  <div className={styles}>
    <div className="project-container">
      <div className = "quote">
        "Live life by <b>design </b>, not by default."
      </div>
      <div className="iconDiv">
            <img src={icon} alt="icon" className="icon" />
            <div>
              <p>
              Hi, <b>I'm Katie Stout.</b>
                  <br/>I am a UI UX Designer, Graphic Designer, 
                  <br/>Illustrator, and Front-End Web Developer.
                  <br/> <i>Welcome to my portfolio!</i>
              </p>
            </div>
          </div>
      <div className="parent-1">
        <Link to="/crewcuts">
          {/* <div className="project project-2"> */}
              <img src={ccGraphic} alt="ccGraphic" className="front-graphic project project-1" />
          {/* </div> */}
        </Link>

        <Link to="/mpp">
          {/* <div className="project project-2"> */}
   
           
              <img
                src={mppGraphic}
                alt="mppGraphic"
                className="front-graphic project project-2"
              />
 
          {/* </div> */}
        </Link>

        <Link to="/artgallery">
          {/* <div className="project project-3"> */}
           
                            <img
                              src={galleryGraphic}
                              alt="galleryGraphic"
                              className="front-graphic project project-3 "
                            />
    
          {/* </div> */}
        </Link>

        <Link to="/portfolio">
          {/* <div className="project project-4"> */}
           
              <img
                src={portfolioGraphic}
                alt="portfolioGraphic"
                className="front-graphic project project-4"
              />

          {/* </div> */}
        </Link>
      </div>
    </div>
  </div>
);

export default MainPage;
