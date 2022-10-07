import styles from "./nav.scss";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import MainPage from "./../../routes/projects/components/mainPage";
import AboutPage from "./../../routes/about/components/aboutPage";
import CrewCuts from "../../routes/projects/components/crewCuts/crewCuts";
import ArtGallery from "../../routes/projects/components/artGallery/artGallery";
import MPP from "../../routes/projects/components/mpp/mpp";
import Portfolio from "../../routes/projects/components/portfolio/portfolio";

const Nav = () => {
  const [open, setOpen] = useState("!active");

  return (
    <Router>
      <div>
        <div className={styles}>
          <nav className={open === "active" ? "open" : "!open"}>
            <ul className="nav-items">
              <li className="nav-item" onClick={() => setOpen("!active")}>
                <Link to="/work">Work</Link>
              </li>
              <li className="nav-item" onClick={() => setOpen("!active")}>
                <Link to="/about">About</Link>
              </li>

              <li className="nav-item" onClick={() => setOpen("!active")}>
                <Link
                  to={{
                    pathname:
                      "https://docs.google.com/document/d/1aLMFaIkVNjb4KejTRuDj2tsmybOk5HtxAFdej7_aVEM/edit?usp=sharing",
                  }}
                  target="_blank"
                >
                  {" "}
                  Resume{" "}
                </Link>
              </li>
            </ul>

            <div
              className="hamburger"
              onClick={() => setOpen(open === "!active" ? "active" : "!active")}
            >
              <div className={open === "active" ? "close-icon" : "open-icon"}>
                <span className="bar bar-one"></span>
                <span className="bar bar-two"></span>
                <span className="bar bar-three"></span>
              </div>
            </div>
          </nav>

          <Switch>
            <Route
              exact
              path="/work"
              render={() => {
                return <Redirect to="/" />;
              }}
            />

            <Route exact path="/" component={MainPage} />
            <Route path = "/work" component={MainPage}/>
            <Route path="/about" component={AboutPage} />
            <Route path="/crewcuts" component={CrewCuts} />
            <Route path="/artgallery" component={ArtGallery} />
            <Route path="/mpp" component={MPP} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Nav;
