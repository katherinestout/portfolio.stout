import React from "react";
import { Link } from "react-router-dom";
import styles from "./../../styles/crewCuts.scss";
import ccGraphic from "./../../../../svg/crewCuts/crewcutssq.png";
// import talkBubbles from "./../../../../svg/crewCuts/talkBubbles.png";
import sitemap from "./../../../../svg/crewCuts/sitemapCrewCuts.png";
import lowFiPrototype from "./../../../../svg/crewCuts/lowFiScreenshot.png";
import lowFi from "./../../../../svg/crewCuts/lowFi.png";
import highFiPrototype from "./../../../../svg/crewCuts/highFiScreenshot.png";
import highFi from "./../../../../svg/crewCuts/highFi.png";
import ccWireframes from "./../../../../svg/crewCuts/ccWireframes.png";

const CrewCuts = () => (
  <div className={styles}>
    <div className="crewCutsBody">
      <div className="crewCutsContent">
        <img src={ccGraphic} alt="ccGraphic" className="ccGraphic" />
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
              Crew Cuts is a small business ran by two brothers in Silver
              Spring, MD, offering various services such as lawn care, moving,
              and gardening. They are in the process of building their website,
              but currently do not have another online presence.
            </div>
          </div>
        </div>

        <div className="wrapper-2">
          <div className="header div1">Problem</div>

          <div className="div2">
            <div className="subHeader">Distrust </div>

            <div className="content">
              I first began empathizing with users. I learned that clients want
              to easily book a lawn care service online from a proven reputable
              local business. A common theme I found was a lot of clients had a
              distrust for small businesses when they did not have any reviews
              or they could not see previous work, and therefore were more
              likely to seek services from larger companies.
            </div>
          </div>
        </div>

        <div className="wrapper-3">
          <div className="header div1">Solution</div>
          <div className="div2">
            <div className="subHeader">Display Previous Work and Reviews </div>
            <div className="content">
              The goal is to build a lawn-care booking app that users can easily
              see reviews, as well a previous work, so that they can book
              lawn-services at their convenience.
            </div>
          </div>
        </div>

        <div className="wrapper-4">
          <div className="header div1">User Research</div>
          <div className="div2">
            <div className="subHeader">Homeowner Survey </div>
            <div className="content">
              I took a survey of 10 homeowners in the Silver Spring, MD area.
              Specifically all of these homeowners had yards. Five of homeowners
              were over the age of 50, and the other five homeowners were under
              the age of 50.
            </div>
          </div>
        </div>

        <div className="wrapper-5">
          <div className="div1">
            <p className="percents ">70% </p>
            <p className="boldContent">Would book online vs call</p>
          </div>
          <div className="percents div2">
            <p className="percents ">80% </p>
            <p className="boldContent">
              Look at Yelp or Google reviews to help them decide on a service
            </p>
          </div>
          <div className="percents div3">
            <p className="percents ">100% </p>
            <p className="boldContent">Value before and after pictures</p>
          </div>

          <div className="div4">
            <p className="percents">80%</p>
            <p className="boldContent">
              Would rather hire a Small local business rather than a big company{" "}
            </p>

            <p className="content center">
              50% hire small business or do it themselves 50% hire big well
              known companies
            </p>
            <p className="content center">
              Of the 50% that hire big companies, 100% of users said to sway
              them to hire a small business they would upon consideration based
              on reviews online, or recommendations from someone they already
              know
            </p>
          </div>
        </div>

        <div className="wrapper-6 center">
          <div className="header div1">Key themes found in survey:</div>
          <div className="subHeader div2">Timeliness</div>
          <div className="subHeader div3">Trustworthiness</div>
          <div className="subHeader div4">Proven Work</div>
        </div>

        <div className="wrapper-7">
          <div className="div1 header">Persona</div>
          <div className="div2 subHeader">Jan Gardiner</div>
          <div className="div3">
            <ul className="content">
              <li className="personaName">JAN</li>
              <li>Jan Gardiner, 30</li>
              <li>Teacher</li>
              <li>Married</li>
              <li>Silver Spring, MD</li>
            </ul>
          </div>
        </div>

        <div className="center">
          {/* <img src={talkBubbles} alt="talkbubbles" className="talkBubbles" /> */}
        </div>

        <div className="wrapper-8">
          <div className="div1 header">Needs</div>

          <div className="div2 content">
            Easily see before and after photos of gardening. Reviews to show
            trustworthiness and quality of work.
          </div>
          <div className="div3 header">Frustrations</div>
          <div className="div4 content">
            {" "}
            I can’t find a lawn-service company that is timely, trustworthy, or
            has a proven track record.{" "}
          </div>

          <div className="div5 header">Problem Statement</div>
          <div className="div6 content">
            Jan Gardiner is a 30 year old homeowner who needs a lawn-care
            service that is experienced and has proven results, to plant her
            garden this Spring because she does not have time with her schedule.
            She also does not have time to supervise who she hires, which makes
            her feel concerned.
          </div>
        </div>

        <div className="wrapper-9">
          <div className="parent-1">
            <div className="div1">
              <div className="header">Sitemap</div>
              <div className="content">Sitemap</div>
            </div>
            <div className="div2"></div>
            <div className="div3">
              {" "}
              <img src={sitemap} alt="sitemapcc" className="sitemap" />
            </div>
          </div>

          <div className="parent-2">
            <div className="header div1">
              <div className="header">Wireframes</div>
              <div className="content">wireframes</div>
            </div>
            <div className="div2"></div>
            <div className="div3">
              <img
                src={ccWireframes}
                alt="ccWireframes"
                className="wireframes"
              />
            </div>
          </div>

          <div className="parent-3">
            <div className="header div1">Low-Fidelity Prototype</div>
            <div className="div2 div5">
              <img src={lowFi} alt="lowFi2" className="lowFi" />
            </div>
            <div className="div3 div6">
              <img
                src={lowFiPrototype}
                alt="lowfi"
                className="lowFiPrototype"
              />
            </div>
            <div className="div4 div7">
              {" "}
              <Link
                to={{
                  pathname:
                    "https://xd.adobe.com/view/85f94a98-fc43-4c64-aca7-d12f5184ab0b-d0aa/?fullscreen",
                }}
                target="_blank"
              >
                {" "}
                Click here to see the low-fidelity prototype of CrewCuts Mobile
                App here!
              </Link>
              <Link
                to={{
                  pathname:
                    "https://xd.adobe.com/view/85f94a98-fc43-4c64-aca7-d12f5184ab0b-d0aa/grid",
                }}
                target="_blank"
              >
                {" "}
                Click here to see all screens!
              </Link>
            </div>
          </div>

          <div className="parent-4">
            <div className="header div1">High-Fidelity Prototype</div>
            <div className="div2 div5">
              {" "}
              <img src={highFi} alt="highfi2" className="highFi" />
            </div>
            <div className="div3 div6">
              {" "}
              <img
                src={highFiPrototype}
                alt="highfi"
                className="highFiPrototype"
              />
            </div>
            <div className="div4 div7">
              {" "}
              <Link
                to={{
                  pathname:
                    "https://xd.adobe.com/view/d8470e34-f515-4044-8a05-7127faf10f3f-8d14/?fullscreen",
                }}
                target="_blank"
              >
                {" "}
                Click here to see the high-fidelity prototype of CrewCuts Mobile
                App here!
              </Link>
              <Link
                to={{
                  pathname:
                    "https://xd.adobe.com/view/d8470e34-f515-4044-8a05-7127faf10f3f-8d14/grid/",
                }}
                target="_blank"
              >
                {" "}
                Click here to see all screens!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CrewCuts;
