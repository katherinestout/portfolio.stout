import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ResumePage from "./routes/resume/components/resumePage";
import MainPage from "./routes/projects/components/mainPage";
import ContactPage from "./routes/contact/components/contactPage";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

      
        <Switch>
          <Route path="/projects">
            <MainPage />
          </Route>
          <Route path="/resume">
            <ResumePage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

