import React from "react";
import styles from "./../../styles/galleryApp.scss";

const ArtGallery = () => (
  <div className={styles}>
    <div className="galleryBody">
      <div className="galleryContent">
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
              The Product The Artist Bio App for an Art Gallery in Edinburgh was
              designed to connect our target users ( users who are interested in
              obtaining art pieces such as art collectors ) with other artists
              via the app. This App was one of the projects completed from
              beginning to end while I obtained the Certificate in UX design
              from Coursera. We utilized the five stages of the design thinking
              process: Empathize Define Ideate Prototype Test Product Duration
              October 2021 - December 2021
            </div>
          </div>
        </div>

        <div className="wrapper-2">
          <div className="header div1">Problem</div>

          <div className="div2">
            <div className="subHeader">Problem </div>

            <div className="content">The goal was to create an app that allowed fThe goal was to create an app that allowed f</div>
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
            Understanding the User: Empathize and Define
          </div>

          <div className="header div2">User Research Summary </div>

          <div className=" div3">
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
          <div className="div2">IMAGE</div>
          <div className="div3">IMAGE</div>
          <div className="div4">IMAGE</div>
          <div className="div5 content">
            1. Galleries don't have a way for me to contact artists.
          </div>
          <div className="div8 boldContent">
            Provide multiple ways to contact artists, such as a contact form,
            the artist’s contact information, and the artist’s individual
            website.
          </div>

          <div className="div6 content">
            {" "}
            2. Galleries often have limited selection of art, I cannot find what
            I am looking for.{" "}
          </div>

          <div className="div9 boldContent">
            Provide multiple ways of searching for the art via the gallery app.
            Can put genre, artist, and multiple genres. Provide a search bar.
          </div>

          <div className="div7 content">
            3. Because of the pandemic, I cannot get to galleries in person.{" "}
          </div>

          <div className="div10 boldContent">Provide high quality images.</div>
        </div>

        <div className="wrapper-6">
          <div className="header div1"> Persona</div>

          <div className="div2">
            <div className="subHeader">Tiffany Young </div>

            <div className="content">
              Problem statement: Tiffany Young is an art dealer who needs to be
              able to view art virtually because she doesn’t have time to
              travel.
              <div>IMAGE OF PERSONA / with stuff on it </div>
            </div>
          </div>
        </div>

        <div className="wrapper-7">
          <div className="header div1">User Journey Map</div>

          <div className="div2">
            <div> USER JOURNEY MAP </div>

            <div className="content">
              Mapping Tiffany’s journey shows several problems that could arise
              with the app. Definitely simplicity/ conciseness in the menu style
              and high quality photos are a must. Persona: Tiffany Young Goal:
              Find new art pieces for my gallery.
            </div>
          </div>
        </div>

        <div className="wrapper-8">
          <div className="subHeader div1">
            Starting The Design: Ideate, Prototype, and Test
          </div>
          <div className="header div2">Paper Wireframes</div>
          <div className="div3">Paper wireframes IMAGE</div>

          <div className="div4 header">Digital Wireframes</div>

          <div className="div5">IMAGE WITH LABELS</div>

          <div className="div6 header">Low-Fidelity Prototypes</div>

          <div className="div7">
            https://www.figma.com/proto/BkvbbGLoYEyj2PUKLNQsWp/EdinburghGalleryApp?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=8%3A415{" "}
          </div>
        </div>

        <div className="wrapper-9">
          <div className="div1 header"> Usability Studies</div>
          <div className="div2">
            I conducted two rounds of usability studies. Findings from the first
            study helped guide the designs from wireframes to mockups. The
            second study used a high fidelity prototype and revealed what
            aspects of the mockups needed refining.
          </div>
          <div className="div3">
            Round One Findings:
            <br />
            1.Users want to easily find what art They are looking for.
            <br />
            2. Users want to be able to view art in Great detail.
          </div>
          <div className="div4">
            Round Two Findings:
            <br />
            1. Users want to be able to be directed somewhere after filling out
            contact form.
            <br />
            2. Users want to get a confirmation email.
          </div>
        </div>

        <div className="wrapper-10">
          <div className="div1 subHeader">Refining the Design</div>
          <div className="div2 header">High-Fidelity Prototype</div>
          <div className="div3">
            https://www.figma.com/proto/tOggtjWuy6ImMI2hmPZLEx/High-Fidelity-Prototypes?node-id=2%3A455&starting-point-node-id=2%3A455
          </div>
          <div className="div4">text</div>
        </div>

        <div className="wrapper-11">
          <div className="div1 subHeader">User Testing</div>
          <div className="div2 header">Accessibility Considerations</div>
          <div className="div3">BEFORE</div>
          <div className="div4">AFTER</div>
        </div>
      </div>
    </div>
  </div>
);

export default ArtGallery;
