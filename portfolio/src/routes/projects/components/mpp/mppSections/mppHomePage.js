import React from "react";
import mppHomeStyles from "./../../../styles/mppNav/mppHome.scss";
import about15 from "./../../../../../svg/mpp/about/about15.png";
import about16 from "./../../../../../svg/mpp/about/about16.png";
// import home from "./../../../../../svg/mpp/home/home";
import home1 from "./../../../../../svg/mpp/home/home1.png";
import home2 from "./../../../../../svg/mpp/home/home2.png";
import home3 from "./../../../../../svg/mpp/home/home3.png";
import home4 from "./../../../../../svg/mpp/home/home4.png";
import home5 from "./../../../../../svg/mpp/home/home5.jpeg";
import home6 from "./../../../../../svg/mpp/home/home6.png";
import home8 from "./../../../../../svg/mpp/home/home8.png";
import home9 from "./../../../../../svg/mpp/home/home9.png";
import hospital from "../../../../../svg/mpp/home/hospital.png";
import pill from "./../../../../../svg/mpp/home/pill.svg";
import syringe from "./../../../../../svg/mpp/home/syringe.png";
import home10 from "./../../../../../svg/mpp/home/home10.svg";
import home11 from "./../../../../../svg/mpp/home/home11.svg";
import home12 from "./../../../../../svg/mpp/home/home12.png";
import home13 from "./../../../../../svg/mpp/home/home13.png";
import home14 from "./../../../../../svg/mpp/home/home14.png";
import css from "./../../../../../svg/mpp/home/css.png";
import animation from "./../../../../../svg/mpp/home/animation.png";
import iv from "./../../../../../svg/mpp/home/iv.svg";
import one from "./../../../../../svg/one.png";
import two from "./../../../../../svg/two.png";
import three from "./../../../../../svg/three.png";
import { Link } from "react-router-dom";

const MppHomePage = () => (
  <div className={mppHomeStyles}>
    <div className="mppHomePage">
      <div className="mppContainer">
        <div className="wrapper-1">
          <div className="div1 subHeader">CREATING MPP - THE PROCESS</div>
          <div className="div2 header">Home Page</div>
        </div>

        <div className="wrapper-2">
          <div className="div1">
            <div className="parent-1">
              <div className="div1">SKETCHES</div>
              <div className="div2">
                <img src={about16} alt="about16" className="about16" />
              </div>
              <div className="div3">FINAL PRODUCT</div>
            </div>
          </div>

          <div className="div2">
            <div className="parent-2">
              <div className="div1">
                {" "}
                <img src={home5} alt="home5" className="home5" />{" "}
              </div>
              <div className="div2">
                {" "}
                <img src={home6} alt="home6" className="home6" />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="mppLink content">
          <Link
            to={{
              pathname: "https://mpp.t1cg.io",
            }}
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            [ Click here to see the MPP site ]{" "}
          </Link>
        </div>

        <div className="pageDetail">
          <img src={about15} alt="about15" className="about15" />
        </div>

        <div className="wrapper-3">
          <div className="div1 subHeader">THE PIECES</div>

          <div className="div2">
            <div className="div1 content">
              <img src={one} alt="one" className="one" />I was tasked with
              coming up with four graphics to represent the four parts of
              Medicare; Part A, Part B, Part D, and DMEPOS. When hovering over
              the graphic, I also created CSS animations. To create these I used
              Affinity Designer (similar to Adobe Illustrator), and for the
              animations, I used CSS.
              <div className="div1">
                <div className="hospital">
                  <img src={hospital} alt="hospital" className="hospital" />
                </div>
                <div className="iv">
                  <img src={iv} alt="iv" className="iv" />
                </div>
                <div className="pill">
                  <img src={pill} alt="pill" className="pill" />
                </div>
                <div className="syringe">
                  <img src={syringe} alt="syringe" className="syringe" />
                </div>
              </div>
            </div>
          </div>

          <div className="div3">
            <div className="parent-1 content">
              <div className="div1">
                {" "}
                For the animations, I created the graphics in layers, like so:
              </div>
              <div className="div2">
                <div className="parent-1">
                  <div className="div1">
                    <img src={home8} alt="home8" className="home8" />
                  </div>

                  <div className="div2">
                    <img src={home9} alt="home9" className="home9" />
                  </div>
                </div>
              </div>
              <div className="div3">
                Here is an of the CSS animation. By moving the layers of the
                graphic, you can easily manipulate the graphic to move one way
                on hover, and then reverse the movement when mousing off.
              </div>
              <div className="div4">
                <div className="parent-1">
                  <div className="div1">
                    <img
                      src={animation}
                      alt="animation"
                      className="animation"
                    />
                  </div>
                  <div className="div2">
                    <img src={css} alt="css" className="css" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="div4">
            <div className="parent-1 content">
              <div className="div1">
                For PartA, I created an IV bag graphic, the animation was for
                the IV bag to fill up and drain on/off hover.
              </div>
              <div className="div2">
                <img src={home2} alt="home2" className="home2" />{" "}
              </div>
              <div className="div3">
                For Part B, I created a Hospital graphic, on/off hover the doors
                of the hospital would open and people would walk left and right.
              </div>
              <div className="div4">
                {" "}
                <img src={home4} alt="home4" className="home4" />
              </div>
              <div className="div5">
                For Part D, I created a Pill graphic, which on hover would spin
                one way, and off hover would spin the opposite way.
              </div>
              <div className="div6">
                {" "}
                <img src={home1} alt="home1" className="home1" />
              </div>
              <div className="div7">
                For DMEPOS, I created a Syringe graphic, which on/off hover
                would fill/empty with liquid.
              </div>
              <div className="div8">
                {" "}
                <img src={home3} alt="home3" className="home3" />
              </div>
            </div>
          </div>

          <div className="div5"></div>
        </div>

        <div className="wrapper-4">
          <div className="div1 subHeader">
            <img src={two} alt="two" className="two" />
            Teaser Graphics
          </div>
          <div className="content">
            Graphics to tease information about Medicare data.{" "}
          </div>

          <div className="div2">
            <div className="parent-1">
              <div className="div1">
                <img src={home10} alt="home10" className="home10" />
              </div>
              <div className="div2">
                <img src={home11} alt="home11" className="home11" />
              </div>
            </div>
            <div className="div3">
              <img src={home12} alt="home12" className="home12" />
            </div>
          </div>
        </div>

        <div className="wrapper-5">
          <div className="div1 subHeader">
            <img src={three} alt="three" className="three" />
            Facts and Figures
          </div>
          <div className="content">
            A table with intriguing facts and figures found from observing the
            Medicare data.{" "}
          </div>
          <div className="div2">
            <div className="div1">
              <img src={home13} alt="home13" className="home13" />
            </div>
            <div className="div2">
              <img src={home14} alt="home14" className="home14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MppHomePage;
