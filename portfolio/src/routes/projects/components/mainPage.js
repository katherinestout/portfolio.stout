import React from "react";
import styles from "./../styles/mainPage.scss";
import { Link } from "react-router-dom";
import ccGraphic from "./../../../svg/crewCuts/crewcutssq.png";
import galleryGraphic from "./../../../svg/gallery/galleryFront.png";
import mppGraphic from "./../../../svg/mpp/mppFront.png";

const MainPage = () => (
  <div className={styles}>
    <div className="project-container">
      <Link to="/crewCuts">
        <div className="project project-1">
          <div className="div1">
            <div className="div2">
              <span className="project-title">CrewCuts </span>
              <span className="project-content">
                <ul>
                  <li>Mobile App</li>
                  <li>Adobe XD</li>

                  <li>Affinity Designer</li>
                  <li>Real-World project</li>
                </ul>
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
                <ul>
                  <li>Website </li>
                  <li>Adobe XD </li>
                  <li>Affinity Designer</li>
                  <li> Previous Work Experience</li>
                </ul>
              </span>
            </div>
          </div>
          <div className="div3">
            <img src={mppGraphic} alt="mppGraphic" className="front-graphic" />
          </div>
        </div>
      </Link>

      <Link to="/artGallery">
        <div className="project project-3">
          <div className="div1">
            <div className="div2">
              <span className="project-title">Art Gallery</span>
              <br />
              <span className="project-content">
                <ul>
                  <li>Mobile App </li>
                  <li>Figma</li>
                  <li>Google UI UX Certificate Course</li>
                </ul>
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
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                skhkahsdfklhaksfdh jkshfdkashdflk ksjdhfkaj
              </span>
            </div>
          </div>
          <div className="div3">
            <img src={ccGraphic} alt="ccGraphic" className="front-graphic" />
          </div>
        </div>
      </Link>
    </div>
  </div>
);

export default MainPage;
