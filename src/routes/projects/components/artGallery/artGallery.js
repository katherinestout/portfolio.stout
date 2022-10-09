import React from "react";
import styles from "./../../styles/galleryApp.scss";
import { Link } from "react-router-dom";
import Before from "./../../../../svg/gallery/Before.png";
import After from "./../../../../svg/gallery/After.png";
import Persona from "./../../../../svg/gallery/persona.png";
import UserJourney from "./../../../../svg/gallery/UserJourney.png";
import Digital1 from "./../../../../svg/gallery/Digital1.png";
import Digital2 from "./../../../../svg/gallery/Digital2.png";
import LowFi1 from "./../../../../svg/gallery/LowFi1.png";
import LowFi2 from "./../../../../svg/gallery/LowFi2.png";
import PaperWireframe from "./../../../../svg/gallery/paperWireframe.jpg";
import HighFi1 from "./../../../../svg/gallery/HighFi1.png";
import HighFi2 from "./../../../../svg/gallery/HighFi2.png";
import headerGraphic from "./../../../../svg/gallery/galleryFront.png";

const ArtGallery = () => (
  <div className={styles}>
    <div className="galleryBody">
      <div className="galleryContent">
        <div className="header-wrapper">
          <div className="div1">
            <img
              src={headerGraphic}
              alt="headerGraphic"
              className="headerGraphic"
            />
          </div>
          <div className="div2">
            <span className="headerTitle">Art Gallery </span>
            <ul>
              <li>Mobile App</li>
              <li>Figma</li>
              <li>Google UI UX Certificate</li>
            </ul>
          </div>
        </div>
        <div className="wrapper-1">
          <div className="div1">
            <div className="header"> Responsibilities</div>
            <ul className="content">
              <li>User Research</li>
              <li>Wireframes</li>
              <li>Persona</li>
              <li>Usability Analyst</li>
              <li>Low-Fidelity Prototype</li>
              <li>High-Fidelity Prototype</li>
            </ul>
          </div>
          <div className="div2">
            <div className="subHeader">Background </div>
            <div className="content">
              The Artist Bio App for an Art Gallery in Edinburgh was designed to
              connect our target users (users who are interested in obtaining
              art pieces such as art collectors) with other artists via the app.
              This app was one of the projects completed from beginning to end
              while I obtained the Certificate in UX design course from Google.
              We utilized the five stages of the design thinking process:
              Empathize, Define, Ideate, Prototype, and Test.
            </div>
          </div>
        </div>

        <div className="wrapper-2">
          <div className="header div1">Problem</div>

          <div className="div2">
            <div className="subHeader">Problem </div>

            <div className="content">
              Users need an app to easily find art pieces. The app must have
              high quality images, and ways to contact artists.
            </div>
          </div>
        </div>

        <div className="wrapper-3">
          <div className="header div1">Solution</div>

          <div className="div2">
            <div className="subHeader">Solution </div>

            <div className="content">
              The goal was to create an app that allowed for users to easily
              find art they wanted to obtain and to be able to contact the
              artist, to spark the conversation that could eventually lead to
              more opportunities for the artist such as the user purchasing
              their art or their art being showed in other galleries as well.
            </div>
          </div>
        </div>

        <div className="wrapper-4">
          <div className="subHeader div1">
            Understanding the User: <i>Empathize and Define</i>
          </div>

          <div className="header div2">User Research Summary </div>

          <div className=" div3 content">
            I found that users wanted a variety of art to select from. Users
            also wanted to be able to contact artists directly and from the
            specific gallery websites. Often galleries don’t list contact
            information and make users directly contact the gallery instead.
            Users also wanted to be able to see art and maybe not necessarily
            purchase it, and because of the pandemic galleries should adapt to
            an online audience.
          </div>
        </div>

        <div className="wrapper-5">
          <div className="div1 subHeader">User Pain Points</div>

          <div className="div2 content">
            1. Galleries don't have a way for me to contact artists.
          </div>
          <div className="div3 boldContent">
            Provide multiple ways to contact artists, such as a contact form,
            the artist’s contact information, and the artist’s individual
            website.
          </div>

          <div className="div4 content">
            {" "}
            2. Galleries often have limited selection of art, I cannot find what
            I am looking for.{" "}
          </div>

          <div className="div5 boldContent">
            Provide multiple ways of searching for the art via the gallery app.
            Can put genre, artist, and multiple genres. Provide a search bar.
          </div>

          <div className="div6 content">
            3. Because of the pandemic, I cannot get to galleries in person.{" "}
          </div>

          <div className="div7 boldContent">Provide high quality images.</div>
        </div>

        <div className="wrapper-6">
          <div className="header div1"> Persona</div>

          <div className="div2">
            <div className="subHeader">Tiffany Young </div>

            <div className="content">
              Problem statement: Tiffany Young is an art dealer who needs to be
              able to view art virtually because she doesn’t have time to
              travel.
              <div>
                <div className="persona">
                  <img src={Persona} alt="persona" className="persona" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper-7">
          <div className="header div1">User Journey Map</div>

          <div className="div2">
            <div className="userJourney">
              <img
                src={UserJourney}
                alt="userJourney"
                className="userJourney"
              />
            </div>

            <div className="content">
              Mapping Tiffany’s journey shows several problems that could arise
              with the app. Definitely simplicity/ conciseness in the menu style
              and high quality photos are a must.
            </div>
          </div>
        </div>

        <div className="wrapper-8">
          <div className="subHeader div1">
            Starting The Design: <i>Ideate, Prototype, and Test</i>
          </div>
          <div className="header div2">Paper Wireframes</div>
          <div className="div3">
            <img
              src={PaperWireframe}
              alt="paperWireframe"
              className="paperWireframe"
            />
          </div>

          <div className="div4 header">Digital Wireframes</div>

          <div className="div5">
            <div className="digitals">
              <div className="digital1">
                <img src={Digital1} alt="digital1" className="digital1" />
              </div>
              <div className="digital2">
                <img src={Digital2} alt="digital2" className="digital2" />
              </div>
            </div>
            <div></div>
          </div>

          <div className="div6 header">
            Low-Fidelity Prototypes
            <div className="content">
              Click the images below to view the finished Low-Fi Prototype.
            </div>
          </div>

          <div
            className="div7"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="lowFi">
              <div className="lowFi1">
                <Link
                  to={{
                    pathname:
                      "https://www.figma.com/proto/BkvbbGLoYEyj2PUKLNQsWp/EdinburghGalleryApp?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=8%3A415",
                  }}
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                  className="content"
                >
                  <img src={LowFi1} alt="lowFi1" className="lowFi1" />
                </Link>
              </div>
              <div className="lowFi2">
                <Link
                  to={{
                    pathname:
                      "https://www.figma.com/proto/BkvbbGLoYEyj2PUKLNQsWp/EdinburghGalleryApp?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=8%3A415",
                  }}
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img src={LowFi2} alt="lowFi2" className="lowFi2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper-9">
          <div className="div1 header"> Usability Studies</div>
          <div className="div2 content">
            I conducted two rounds of usability studies. Findings from the first
            study helped guide the designs from wireframes to mockups. The
            second study used a high fidelity prototype and revealed what
            aspects of the mockups needed refining.
          </div>
          <div className="div3 content">
            <div className="bold">Round One Findings:</div>
            1.Users want to easily find what art They are looking for.
            <br />
            2. Users want to be able to view art in Great detail.
          </div>
          <div className="div4 content">
            <div className="bold">Round Two Findings:</div>
            1. Users want to be able to be directed somewhere after filling out
            contact form.
            <br />
            2. Users want to get a confirmation email.
          </div>
        </div>

        <div className="wrapper-10">
          <div className="div1 subHeader">Refining the Design</div>
          <div className="div2 header">
            High-Fidelity Prototype
            <div className="content">
              Click the images below to view the finished High-Fi Prototype.
            </div>
          </div>
          <div className="div3">
            <Link
              to={{
                pathname:
                  "https://www.figma.com/proto/tOggtjWuy6ImMI2hmPZLEx/High-Fidelity-Prototypes?node-id=2%3A455&starting-point-node-id=2%3A455",
              }}
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
              className="content"
            ></Link>
          </div>
          <div className="div4 content">
            <div className="highFi">
              <div className="highFi1">
                <Link
                  to={{
                    pathname:
                      "https://www.figma.com/proto/tOggtjWuy6ImMI2hmPZLEx/High-Fidelity-Prototypes?node-id=2%3A455&starting-point-node-id=2%3A455",
                  }}
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img src={HighFi1} alt="highFi1" className="highFi1" />
                </Link>
              </div>
              <div className="highFi2">
                <Link
                  to={{
                    pathname:
                      "https://www.figma.com/proto/tOggtjWuy6ImMI2hmPZLEx/High-Fidelity-Prototypes?node-id=2%3A455&starting-point-node-id=2%3A455",
                  }}
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img src={HighFi2} alt="highFi2" className="highFi2" />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper-11">
          <div className="div1 subHeader">User Testing</div>
          <div className="div2 header">
            Accessibility Considerations
            <div className="content">
              During user testing, it was suggested by my peers that the app
              might have readability issues. To fix the issue, I added white
              background behind text, in addition to the transparent background.
            </div>
          </div>
          <div className="div3">
            {" "}
            <img src={Before} alt="before" className="before" />
          </div>
          <div className="div4">
            {" "}
            <img src={After} alt="after" className="after" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ArtGallery;
