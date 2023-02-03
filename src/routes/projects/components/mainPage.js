import React from "react";
import styles from "./../styles/mainPage.scss";
import { Link } from "react-router-dom";
import ccGraphic from "./../../../svg/frontPageImages/front-4.png";
import galleryGraphic from "./../../../svg/frontPageImages/front-3.png";
import mppGraphic from "./../../../svg/frontPageImages/front-2.png";
import portfolioGraphic from "./../../../svg/frontPageImages/front-1.png";
import icon from "./../../../svg/katieicon.png";

const MainPage = () => (
  <div className={styles}>
    <div className="project-container">
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
          <div className="project project-1">
            <div className="div1">
              <div className="div2">
                <span className="project-title">CrewCuts </span>
                <span className="project-content">
                 <p>
                   Local lawn care business looking to building their online prescence to attract customers.
                   <br/>
                   <br/>
                    <b> Learn More</b>
                 </p>
                </span>
              </div>
            </div>

            <div className="div3">
              <img src={ccGraphic} alt="ccGraphic" className="front-graphic" />
            </div>
          </div>
        </Link>

        <Link to="/mpp">
          <div className="project project-2">
            <div className="div1">
              <div className="div2">
                <span className="project-title">MPP </span>
                <br />
                <span className="project-content">
                 <p>
                   Medicare Provider Data Project,
                   designed to create data visualizations conveying patterns and statstics found within the CMS website.
                   <br/>
                   <br/>
                    <b> Learn More</b>
                 </p>
                </span>
              </div>
            </div>
            <div className="div3">
              <img
                src={mppGraphic}
                alt="mppGraphic"
                className="front-graphic"
              />
            </div>
          </div>
        </Link>

        <Link to="/artgallery">
          <div className="project project-3">
            <div className="div1">
              <div className="div2">
                <span className="project-title">Art Gallery</span>
                <br />
                <span className="project-content">
                 <p>
                
                 An online gallery app designed to facilitate communication and business for Art Dealers and Artists.
                 <br/>
<br/><b> Learn More</b>
                 </p>
                </span>
              </div>
            </div>
                          <div className="div3">
                            <img
                              src={galleryGraphic}
                              alt="galleryGraphic"
                              className="front-graphic"
                            />
                          </div>
          </div>
        </Link>

        <Link to="/portfolio">
          <div className="project project-4">
            <div className="div1">
              <div className="div2">
                <span className="project-title">Portfolio</span>
                <br />
                <span className="project-content">
                  <p>
                  The process, design, and redesigns 
of this UI UX Design portfolio.
<br/>
<br/>
                  <b> Learn More</b>
                  </p>
                </span>
              </div>
            </div>
            <div className="div3">
              <img
                src={portfolioGraphic}
                alt="portfolioGraphic"
                className="front-graphic"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default MainPage;
