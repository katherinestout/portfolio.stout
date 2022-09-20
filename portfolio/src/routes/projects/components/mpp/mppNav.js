import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import mppNavStyles from "./../../styles/mppNav/mppNav.scss";
import MppHomePage from "./mppSections/mppHomePage";
import MppAboutPage from "./mppSections/mppAboutPage";
import MppMedicarePages from "./mppSections/mppMedicarePages";

const MppNav = () => {
  return (
    <Router>
      <div>
        <div className={mppNavStyles}>
          <nav className="mppNav">
            <ul className="mpp-nav-items">
              <li className="mpp-nav-item">
                <Link to="/mpp/mppHomePage">HOME PAGE</Link>
              </li>
              <li className="mpp-nav-item">
                <Link to="/mpp/mppMedicarePages">MEDICARE PAGES</Link>
              </li>

              <li className="mpp-nav-item">
                <Link to="/mpp/mppAboutPage"> ABOUT PAGE </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route
              exact
              path="/mpp"
              render={() => {
                return <Redirect to="/mpp/mppHomePage" />;
              }}
            />

            <Route exact path="/mpp/mppHomePage" component={MppHomePage} />
            <Route path="/mpp/mppMedicarePages" component={MppMedicarePages} />
            <Route path="/mpp/mppAboutPage" component={MppAboutPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default MppNav;
