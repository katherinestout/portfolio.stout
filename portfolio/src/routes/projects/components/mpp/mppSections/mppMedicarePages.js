import React from "react";
import mppMedicareStyles from "./../../../styles/mppNav/mppMedicare.scss";
import one from "./../../../../../svg/one.png";
import two from "./../../../../../svg/two.png";
import three from "./../../../../../svg/three.png";
import four from "./../../../../../svg/four.png";

import med1 from "./../../../../../svg/mpp/medicare/med1.png";
import med5 from "./../../../../../svg/mpp/medicare/med5.png";
import med3 from "./../../../../../svg/mpp/medicare/med3.png";
import med6 from "./../../../../../svg/mpp/medicare/med6.png";
import med7 from "./../../../../../svg/mpp/medicare/med7.png";
import med8 from "./../../../../../svg/mpp/medicare/med8.png";
import med9 from "./../../../../../svg/mpp/medicare/med9.png";
import med10 from "./../../../../../svg/mpp/medicare/med10.png";
import med11 from "./../../../../../svg/mpp/medicare/med11.png";
import med12 from "./../../../../../svg/mpp/medicare/med12.png";
import med13 from "./../../../../../svg/mpp/medicare/med13.png";
import med14 from "./../../../../../svg/mpp/medicare/med14.png";
import med15 from "./../../../../../svg/mpp/medicare/med15.png";
import med16 from "./../../../../../svg/mpp/medicare/med16.png";
import about15 from "./../../../../../svg/mpp/about/about15.png";
import about16 from "./../../../../../svg/mpp/about/about16.png";
import { Link } from "react-router-dom";

const MppMedicarePage = () => (
  <div className={mppMedicareStyles}>
    <div className="mppMedicarePage">
      <div className="mppContainer">
        <div className="wrapper-1">
          <div className="subHeader div1">CREATING MPP - THE PROCESS</div>
          <div className="header div2">Parts Of Medicare Pages</div>
        </div>

        <div className="wrapper-2">
          <div className="div1">
            <div className="parent-1 ">
              <div className="div1 ">SKETCHES</div>
              <div className="div2">
                <img src={about16} alt="about16" className="about16" />
              </div>
              <div className="div3">WIREFRAMES</div>
              <div className="div4">
                <img src={about16} alt="about16" className="about16" />
              </div>
              <div className="div5">FINAL PRODUCT</div>
            </div>
          </div>

          <div className="image div2">
            {" "}
            <img src={med1} alt="med1" className="med1" />
          </div>
          <div className="image div3">
            {" "}
            <img src={med3} alt="med3" className="med3" />
          </div>
          <div className="image div4">
            {" "}
            <img src={med5} alt="med5" className="med5" />
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
          <div className="subHeader div1">THE PIECES</div>
          <div className="parent-1">
            <div className="div1 content">
              <img src={one} alt="one" className="one" />
              For each of the four pages, we provided an explanation of the
              particular part of Medicare, including a finances and services
              overview. We also explained what data we had been analyzing and
              what the (future) data visualization tool would display.
            </div>
            <div className="div2">
              <img src={med7} alt="med7" className="med7" />
            </div>
            <div className="div3">
              <img src={med6} alt="med6" className="med6" />
            </div>
          </div>

          <div className="parent-2">
            <div className="div1 content">
              <img src={two} alt="two" className="two" />
              Sections to cover common questions users might have, such as, "How
              is each part financed?", "What Services are covered?", and "What
              is in the MPP data from each part of Medicare?"
            </div>
            <div className="div2">
              <img src={med8} alt="med8" className="med8" />
            </div>
            <div className="div3">
              <img src={med9} alt="med9" className="med9" />
            </div>
          </div>

          <div className="parent-3">
            <div className="div1 content">
              <img src={three} alt="three" className="three" />A thought
              provoking fact regarding questionable spending gaps.
            </div>
            <div className="div2">
              <img src={med10} alt="med10" className="med10" />
            </div>
            <div className="div3">
              <img src={med11} alt="med11" className="med11" />
            </div>
          </div>

          <div className="parent-4">
            <div className="div1 content">
              <img src={four} alt="four" className="four" />A table displaying
              total spending facts/ figures for a particular year.
            </div>
            <div className="div2">
              <img src={med12} alt="med12" className="med12" />
            </div>
            <div className="div3">
              <img src={med13} alt="med13" className="med13" />
            </div>
          </div>
        </div>

        <div className="wrapper-4">
          <div className="subHeader div1">GRAPHICS AND ICONS</div>

          <div className="parent-1">
            <div className="div1 content">
              <img src={one} alt="one" className="one" />
              Graphics for each part of Medicare, representative of what each
              part pertains to.
            </div>
            <div className="div2">
              <img src={med14} alt="med14" className="med14" />
            </div>
          </div>

          <div className="parent-2">
            <div className="div1 content">
              <img src={two} alt="two" className="two" />
              Detailed Icons for Finance, Services, and MPP Data sections.
            </div>
            <div className="div2">
              <img src={med15} alt="med15" className="med15" />
            </div>
          </div>

          <div className="parent-3">
            <div className="div1 content">
              <img src={three} alt="three" className="three" />
              Graphic that briefly summarizes each Spending Gap section.
            </div>
            <div className="div2">
              <img src={med16} alt="med16" className="med16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MppMedicarePage;
