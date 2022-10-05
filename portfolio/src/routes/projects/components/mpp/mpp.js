import React from "react";
import styles from "./../../styles/mpp.scss";
import MppNav from "./mppNav";
import headerGraphic from "../../../../svg/mpp/mppFront.png";
import mpp1 from "./../../../../svg/mpp/research/mpp-1.png";
import mpp2 from "./../../../../svg/mpp/research/mpp-2.png";
import mpp3 from "./../../../../svg/mpp/research/mpp-3.png";
import mpp4 from "./../../../../svg/mpp/research/mpp-4.png";
import mpp5 from "./../../../../svg/mpp/research/mpp-5.png";


const MPP = () => (
  <div className={styles}>
    <div className="mppBody">
      <div className="mppContent1">

      <div className = "header-wrapper">
        <div className = "div1">
        <img src={headerGraphic} alt="headerGraphic" className="headerGraphic" />
        </div>
        <div className = "div2">
        <span className="headerTitle"> MPP </span>
                <ul>
                  <li>Website</li>
                  <li>Adobe XD</li>
                  <li>Affinity Designer</li>
                  <li>Previous Work Experience</li>
                </ul>
        </div>
        </div>
     

        <div className="wrapper-1">
          <div className="div1">
            <div className="darkHeader"> Responsibilities</div>
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
            <div className="darkSubHeader">Background</div>
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
            <div className="darkSubHeader marginDiv">Team and Role</div>
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
          <div className="darkHeader div1">Problem</div>

          <div className="div2">
            <div className="darkSubHeader">Hard to Process </div>

            <div className="content">
              CMS data is not easily digestible, it can be dense and hard to
              sort through. With the plethora of data available it is
              overwhelming.
            </div>
          </div>
        </div>

        <div className="mppContent2">
          <div className="wrapper-4">
            <div className="lightHeader div1">User Research</div>
            <div className="div2">
              <div className="lightSubHeader"> A Deep Dive into Data </div>
              <div className="lightContent">
                The team was asked to use the CMS site (statistical graphs and
                charts) to find useful and tangible data regarding payments and
                utilization of Medicare services.
                <p className="p1">
                  During this time we put ourselves in the users shoes in order
                  to ask:
                </p>
                <p className="p2">What are the issues with the CMS site?</p>
                <div className = "parent-1">
                  <div className="div1"><img src={mpp1} alt="mpp1" className="mpp1" /></div>
                  <div className="div2"><img src={mpp2} alt="mpp2" className="mpp2" /></div>
                  <div className="div3"><img src={mpp3} alt="mpp3" className="mpp3" /></div>
                  <div className="div4"><img src={mpp4} alt="mpp4" className="mpp4" /></div>
                  <div className="div5"><img src={mpp5} alt="mpp5" className="mpp5" /></div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mppContent3">
          <div className="wrapper-3">
            <div className="darkHeader div1">Solution</div>
            <div className="div2">
              <div className="darkSubHeader">
                {" "}
                Comprehensive Facts and Figures{" "}
              </div>
              <div className="content">
                The UI UX team decided we needed to really break it down into
                bite sized pieces, so any user who came to the site could
                comprehend MPP. Each of the particular pages we created were to
                direct users to the (future) data visualization tool.
                <br />
                <br />I provided all of the graphics, icons, and the overall
                layout and design of the About, Part A, Part B, Part D, and
                DEMPOS pages. I also created graphics and CSS animations for the
                home page. For graphics and icons I used Affinity Designer
                (similar to illustrator), and for layouts and wireframes I used
                Adobe XD.{" "}
              </div>
            </div>
          </div>
        </div>

        <MppNav />
      </div>
    </div>
  </div>
);

export default MPP;
