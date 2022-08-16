import React from "react";
import styles from "./../styles/mpp.scss";

const MPP = () => (
  <div className={styles}>
    <div className="mppBody">
      <div className="mppContent">
        <ul>
          <li>Empathize</li>
          <li>Define</li>
          <li>Ideate</li>
          <li>Prototype</li>
          <li>Test</li>
        </ul>

        <div className="wrapper-1">
          <div className="div1">
            <div className="header"> Responsibilities</div>
            <ul className="content">
              <li>User Research</li>
              <li>Wireframes</li>
              <li>Persona</li>
              <li>Sitemap</li>
              <li>Low-Fidelity Prototype</li>
              <li>High-Fidelity Prototype</li>
            </ul>
          </div>
          <div className="div2">
            <div className="subHeader">Background </div>
            <div className="content">
              MPP was created for data enthusiasts to easily analyze and
              visualize useful and intriguing Medicare data. After analyzing the
              available data from the Center of Medicare and Medicaid Services
              (CMS) website we were able to find tangible patterns and
              statistics regarding the four parts of Medicare.
              <br />
              <br />
              The four datasets (also the four parts of Medicare) we were
              looking at Were DMEPOS (Durable Medical Equipment, Prosthetics,
              Orthotics, and Supplies), Part A (Hospital Insurance),Part B
              (Medical Insurance), and Part D (Drug Coverage).
            </div>
            <div className="subHeader marginDiv">Team and Role</div>
            <div className="content">
              I joined T1CG in the middle of 2019 as a Front End Developer, and
              was assigned to the Medicare Provider Data Project (MPP). A few
              months later I became the lead UI UX designer. Our team built MPP
              from the ground up, and we all held a valuable role in the
              creation of the site. It was a very challenging and exciting
              experience to help create MPP from scratch.
            </div>
          </div>
        </div>

        <div className="wrapper-2">
          <div className="header div1">Problem</div>

          <div className="div2">
            <div className="subHeader">Hard to Process </div>

            <div className="content">
              CMS data is not easily digestible, it can be dense and hard to
              sort through. With the plethora of data available it is
              overwhelming.
            </div>
          </div>
        </div>

        <div className="wrapper-3">
          <div className="header div1">Solution</div>
          <div className="div2">
            <div className="subHeader">?? </div>
            <div className="content">
              The UI UX team decided we needed to really break it down into bite
              sized pieces, so any user who came to the site could comprehend
              MPP. Each of the particular pages we created were to direct users
              to the (future) data visualization tool.
              <br />
              <br />I provided all of the graphics, icons, and the overall
              layout and design of the About, Part A, Part B, Part D, and DEMPOS
              pages. I also created graphics and CSS animations for the home
              page. For graphics and icons I used Affinity Designer (similar to
              illustrator), and for layouts and wireframes I used Adobe XD.{" "}
            </div>
          </div>
        </div>

        <div>
          <div className="header div1">User Research</div>
          <div className="div2">
            <div className="subHeader"> ??? </div>
            <div className="content">
              The team was asked to use the CMS site (statistical graphs and
              charts) to find useful and tangible data regarding payments and
              utilization of Medicare services.
              <br />
              <br />
              During this time we put ourselves in the users shoes in order to
              ask:
              <br />
              <br />
              What are the issues with the CMS site?
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  </div>
);

export default MPP;
