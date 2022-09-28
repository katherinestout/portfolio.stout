import React from "react";
import styles from "./../../styles/portfolio.scss";
import sitemap from "./../../../../svg/portfolioSitemap.jpeg";

const Portfolio = () => 

<div className = {styles}>
    <div className = "portfolioBody">

        <div className = "wrapper-1">
            <div className = "div1 subHeader">About</div>
            <div className = "div2 content">            
            For my portfolio I wanted to showcase my variety of UI UX projects while mixing in
            my strong design and coding skills. 
            This website is made responsive with CSS Grid, it is made with React.js framework, 
            and the styling utilizes SASS, CSS, SCSS, and Mixins.
            For the wireframe I used Adobe XD, and for the graphics I used Affinity Designer.
            </div>
        </div>
        <div className = "wrapper-2">
            <div className="div1">
               <div className = "subHeader">Sitemap</div> 
                <div className ="content">Mapping out the pages and content of my portfolio website.</div>
                </div>
            <div className="div2">
            <img src={sitemap} alt="sitemap" className="sitemap" />
            </div>
        </div>
        <div className = "wrapper-3 content">
            <div>
           <b className = "subHeader">This project contains:</b> 
          <p>
            <ul>
                <li>CSS</li>
                <li>SCSS</li>
                <li>Mixins</li>
                <li>Reusable Style Variables</li>
                <li>SASS</li>
                <li>Prettier</li>
                <li>Javascript</li>
                <li>React</li>
                <li>CSS Grid</li>
            </ul></p>
            </div>
         
        </div>
        <div className = "wrapper-4">
            <div className = "div1">
                <div className = "subHeader">High-Fidelity Prototype</div>
                <div className="content">
                    Here is a link to the finshed prototype wireframe for this website, made with Adobe XD. 
                </div>
            </div>
            <div className = "div2">screenshot</div>
        </div>

    </div>
</div>;

export default Portfolio;
