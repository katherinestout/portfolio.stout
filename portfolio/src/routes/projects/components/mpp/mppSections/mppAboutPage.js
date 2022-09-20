import React from "react";
import mppAboutStyles from "./../../../styles/mppNav/mppAbout.scss";
import about1 from "./../../../../../svg/mpp/about/about1.png";
import about2 from "./../../../../../svg/mpp/about/about2.png";
import about3 from "./../../../../../svg/mpp/about/about3.png";
import about4 from "./../../../../../svg/mpp/about/about4.png";
import about5 from "./../../../../../svg/mpp/about/about5.png";
import about6 from "./../../../../../svg/mpp/about/about6.png";
// import about7 from "./../../../../../svg/mpp/about/about7.png";
import ff1 from "./../../../../../svg/mpp/about/ff.png";
import ff2 from "./../../../../../svg/mpp/about/ff2.png";
import ff3 from "./../../../../../svg/mpp/about/ff3.png";
import ff4 from "./../../../../../svg/mpp/about/ff4.png";
import about8 from "./../../../../../svg/mpp/about/about8.png";
import about9 from "./../../../../../svg/mpp/about/about9.png";
import about10 from "./../../../../../svg/mpp/about/about10.png";
import about11 from "./../../../../../svg/mpp/about/about11.png";
import about12 from "./../../../../../svg/mpp/about/about12.png";
import about13 from "./../../../../../svg/mpp/about/about13.png";
// import about14 from "./../../../../../svg/mpp/about/about14.png";
import about15 from "./../../../../../svg/mpp/about/about15.png";
import about16 from "./../../../../../svg/mpp/about/about16.png";
import one from "./../../../../../svg/one.png";
import two from "./../../../../../svg/two.png";
import three from "./../../../../../svg/three.png";
import { Link } from "react-router-dom";

const MppAboutPage = () => (
  <div className={mppAboutStyles}>
    <div className="mppAboutPage">
      <div className="mppContainer">
        <div className="wrapper-1">
          <div className="subHeader div1">CREATING MPP - THE PROCESS</div>
          <div className="header div2">About Page</div>
        </div>

        <div className="wrapper-2">
          <div className="div1">
            <div className = "parent-1">
            <div className = "div1">
            SKETCHES 
            </div>
            <div className = "div2">
            <img src={about16} alt="about16" className="about16" />  
            </div>
            <div className = "div3">
            WIREFRAMES 
            </div>
            <div className = "div4">
            <img src={about16} alt="about16" className="about16" />  
            </div>
            <div className = "div5">
            FINAL PRODUCT
            </div>
            </div>
              </div>

          {/* <div className = "image div1"> <img src={about14} alt="about14" className="about14"/></div> */}
          <div className="image div2">
            {" "}
            <img src={about1} alt="about1" className="about1" />
          </div>
          <div className="image div3">
            {" "}
            <img src={about2} alt="about2" className="about2" />
          </div>
          <div className="image div4">
            {" "}
            <img src={about3} alt="about3" className="about3" />
          </div>
        </div>

        <div className="mppLink content"><Link
         to={{
            pathname:
              "https://mpp.t1cg.io",
          }}
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >  [ Click here to see the MPP site ] </Link></div>

        <div className = "pageDetail"><img src={about15} alt="about15" className="about15" /></div>
        <div className="wrapper-3">
          <div className="div1 subHeader">THE PIECES</div>

          <div className="div2 content">
            <div className="parent-1">
              {/* <div className="div1">  */}
              <img
                src={one}
                alt="one"
                className="one"
                // style = {{marginBottom: -25 }}
              />
              {/* </div> */}
              {/* <div className="content div2"> */}A brief explanation of
              Medicare.
              {/* </div> */}
            </div>
          </div>
          <div className="image div3">
            <img src={about4} alt="about4" className="about4" />
          </div>

          <div className="div4 content">
            <img src={two} alt="two" className="two" />5 sections of content
            pertaining to Medicare.
          </div>

          <div className="image div5">
            <img src={about5} alt="about5" className="about5" />
          </div>

          <div className="div6 content">
            <img src={three} alt="three" className="three" />
            Four slides of interesting facts and figures having to do with
            Medicare Beneficiaries, Healthcare costs, and the Federal
            Governments’ Medicare spending costs.
          </div>

          <div className="image div7">
            <img src={about6} alt="about6" className="about6" />
          </div>

          <div className="div8">
            <div className="parent-1">
              <div className="image div1">
                {" "}
                <img src={ff1} alt="ff1" className="ff1 " />{" "}
              </div>
              <div className="image div2">
                {" "}
                <img src={ff2} alt="ff12" className="ff2" />{" "}
              </div>
              <div className="image div3">
                {" "}
                <img src={ff3} alt="ff3" className="ff3" />{" "}
              </div>
              <div className="image div4">
                {" "}
                <img src={ff4} alt="ff4" className="ff4" />
              </div>
            </div>
          </div>
        </div>

        <div className = "pageDetail"><img src={about15} alt="about15" className="about15" /></div>

        <div className="wrapper-4">
          <div className="parent-1">
            <div className="subHeader div1">GRAPHICS AND ICONS</div>
            <div className="content div2">
              <img src={one} alt="one" className="one" />A main graphic to
              represent the four parts of Medicare
            </div>
            <div className="image div3">
              {" "}
              <img src={about8} alt="about8" className="about8" />
            </div>
            <div className="content div4">
              <img src={two} alt="two" className="two" />
              Icons to break up the five sections of content
            </div>
          </div>

          <div className="parent-2">
            <div className="image div1">
              {" "}
              <img src={about9} alt="about9" className="about9" />
            </div>
            <div className="image div2">
              {" "}
              <img src={about10} alt="about10" className="about10" />
            </div>
            <div className="image div3">
              {" "}
              <img src={about11} alt="about11" className="about11" />
            </div>
            <div className="image div4">
              {" "}
              <img src={about12} alt="about12" className="about12" />
            </div>
            <div className="image div5">
              {" "}
              <img src={about13} alt="about13" className="about13" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MppAboutPage;
