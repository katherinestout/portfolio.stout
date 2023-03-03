import React from "react";
import styles from "./../../styles/portfolio.scss";
import sitemap from "./../../../../svg/portfolioSitemap.jpeg";
import screenshot from "./../../../../svg/portfolioscreenshot.png";
import headerGraphic from "./../../../../svg/PortfolioHeader.png";
import { Link } from "react-router-dom";

const Portfolio = () => (
  <div className={styles}>
    <div className = "portfolio-wrapper">
    <div className="header-wrapper">
      <img
            src={headerGraphic}
            alt="headerGraphic"
            className="headerGraphic"
          />
      </div>

    <div className="portfolioBody">
     

      <div className="wrapper-1">
        <div className="div1 subHeader">About</div>
        <div className="div2 content">
          For my portfolio I wanted to showcase my variety of UI UX projects
          while mixing in my strong design and coding skills. This website is
          made responsive with CSS Grid, it is made with React.js framework, and
          the styling utilizes SASS, CSS, SCSS, and Mixins. For the wireframe I
          used Adobe XD, and for the graphics I used Affinity Designer.
        </div>
      </div>

      <div className="wrapper-2">
        <div className="div1">
          <div className="subHeader">Sitemap</div>
          <div className="content">
            With a sitemap, mapping out the pages and content of my portfolio
            website made future development a breeze.
          </div>
        </div>
        <div className="div2">
          <img src={sitemap} alt="sitemap" className="sitemap" />
        </div>
      </div>


      <div className="wrapper-3 content">
        <div>
          <b className="subHeader">This project contains:</b>
          <p>
            <ul>
              <li>CSS</li>
              <li>SCSS</li>
              <li>Mixins</li>
              <li>Reusable Style Variables</li>
              <li>SASS</li>
              <li>Prettier</li>
              <li>Javascript</li>
              <li>React.js</li>
              <li>CSS Grid</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="wrapper-4">
        <div className="div1">
          <div className="subHeader">High-Fidelity Prototype</div>
          <div className="content">
            <Link
              to={{
                pathname:
                  "https://xd.adobe.com/view/a4ad0111-fb69-4103-8f66-fde03a96f2ee-f1fe/?fullscreen&hints=off",
              }}
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              Click here to see the finished prototype for this website, made
              with Adobe XD.
            </Link>
          </div>
        </div>
        <div className="div2">
          <Link
            to={{
              pathname:
                "https://xd.adobe.com/view/a4ad0111-fb69-4103-8f66-fde03a96f2ee-f1fe/?fullscreen&hints=off",
            }}
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="linkDiv">
              <img src={screenshot} alt="screenshot" className="screenshot" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default Portfolio;
