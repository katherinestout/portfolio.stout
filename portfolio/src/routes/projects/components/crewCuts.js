import React from "react";
import styles from "./../styles/crewCuts.scss";
import ccGraphic from "./../../../svg/crewCuts/crewcutssq.png";

const CrewCuts = () => (
  <div className={styles}>
    <div className="crewCutsBody">

      <img src={ccGraphic} alt="ccGraphic" className="ccGraphic" />
      <div className="wrapper-1">
        <div className="div1">
       <div className = "header"> Responsibilities</div> 
          <ul>
              <li>User Research</li>
              <li>Wireframes</li>
              <li>Persona</li>
              <li>Sitemap</li>
              <li>Low-Fidelity Prototype</li>
              <li>High-Fidelity Prototype</li>
         </ul>     
        </div>
        <div className="div2">
          <div className="header">Background </div>
          
          Crew Cuts is a small business ran by two brothersin Silver
          Spring, MD, offering various services such as lawn care, moving, and
          gardening. They are in the process of building their website, but
          currently do not have another online presence.
        </div>
      </div>
      <div className="wrapper-2">
        <div className="header div1">Problem</div>
        <div className="div2">
        <div className = "subHeader">Distrust </div>
        <div className = "content">
          I first began empathizing with users. I learned that clients
          want to easily book a lawn care service online from a proven reputable
          local business. A common theme I found was a lot of clients had a
          distrust for small businesses when they did not have any reviews or
          they could not see previous work, and therefore were more likely to
          seek services from larger companies.
          </div>
        </div>
        <div className="header div3">Solution</div>
        <div className="div4">
        <div className = "subHeader">Display Previous Work and Reviews </div>
        <div className = "content">
          The goal is to build a lawn-care
          booking app that users can easily see reviews, as well a previous
          work, so that they can book lawn-services at their convenience.
          </div>
        </div>
        <div className="header div5">Research</div>
        <div className="div6">
        <div className = "subHeader">Homeowner Survey </div>
        <div className = "content">
        I took a survey of 10 homeowners in the Silver
          Spring, MD area. Specifically all of these homeowners had yards. Five
          of homeowners were over the age of 50, and the other five homeowners
          were under the age of 50.
        </div>
       
        </div>
      </div>

      <div className="wrapper-3">
          <div className="div1">
              <p className="percents ">70% </p>
              <p className = "boldContent">Would book online vs call</p>
              
              </div>
          <div className="percents div2">
              <p className="percents ">80% </p>
              <p className = "boldContent">Look at Yelp or Google reviews to help them decide on a service</p>
              
              </div>
          <div className="percents div3">
              <p className="percents ">100% </p>
              <p className = "boldContent">Value before and after pictures</p>
              
              </div>

          <div className="boldContent div4"> </div>
          <div className="boldContent div5"> </div>
          <div className="boldContent div6"> </div>
          <div className="div7">    
      <p className="percents">80%</p>
       <p className="boldContent">
       Would
      rather hire a Small local business rather than a big company </p>

      <p>
      50% hire
      small business or do it themselves
      </p>
      <p>
      50% hire big well known companies
      </p>
      <p>
      Of
      the 50% that hire big companies, 100% of users said to sway them to hire a
      small business they would upon consideration based on reviews online, or
      recommendations from someone they already know
      </p>
        </div>

      </div>
 
      <div className="wrapper-4">
        <div className="header div1">Key themes found in survey:</div>
        <div className="subHeader div2">Timeliness</div>
        <div className="subHeader div3">Trustworthiness</div>
        <div className="subHeader div4">Proven Work</div>
      </div>
    
  
      
      
      Persona Jan Gardiner The
      Persona JAN Jan Gardiner, 30 Teacher Married Silver Spring, MD When it
      comes to taking care of your yard and outdoor spaces, what prevents you
      from booking a local lawn care service versus a big company service?
      Definitely when there is no proven work to show, and no way of knowing how
      trustworthy someone is. I am busy all the time so I don’t have time to
      keep watch when someone is hired to work. Needs: Easily see before and
      after photos of gardening. Reviews to show trustworthiness and quality of
      work. Frustrations: I can’t find a lawn-service company that is timely,
      trustworthy, or has a proven track record. As a homeowner, I want someone
      to plant my mums this Spring, because I don’t have time to garden. Jan
      Gardiner is a 30 year old homeowner who needs a lawn-care service to plant
      her mums because she doesn’t have time. Jan Gardiner is a 30 year old
      homeowner who needs a trusted lawn-care service to plant her mums while
      she is at work because she doesn’t have time to watch over who she hires.
      Jan Gardiner is a 30 year old homeowner who needs a lawn-care service that
      is experienced and has proven results to plant her garden this spring
      because last year she hired a company to plant her garden and they killed
      all her flowers. Sitemap Wireframes Low-Fidelity Prototype User Testing
      High-Fidelity Prototype
    </div>
  </div>
);

export default CrewCuts;
