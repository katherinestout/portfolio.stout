import styles from "./nav.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./../../routes/projects/components/mainPage";
import ContactPage from "./../../routes/contact/components/contactPage";
import AboutPage from "./../../routes/about/components/aboutPage";

const Nav = () => {
  const [open, setOpen] = useState("!active");
  return (
    <Router>
      <div className={styles}>
        <nav className={open === "active" ? "open" : "!open"}>
          <ul className="nav-items">
            <li className="nav-item" onClick={() => setOpen("!active")}>
              <Link to="/projects">Work</Link>
            </li>
            <li className="nav-item" onClick={() => setOpen("!active")}>
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item" onClick={() => setOpen("!active")}>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-item" onClick={() => setOpen("!active")}>
              <Link
                to={{
                  pathname:
                    "https://drive.google.com/file/d/1yswrnbyyW2jdyKnh3BWLWITevmLxe3Qh/view?usp=sharing",
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
          <Route path="/projects">
            <MainPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;
