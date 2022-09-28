//import React from 'react';
import styles from "./../styles/aboutPage.scss";
import selfie from "./../../../svg/selfie.png";
import icon from "./../../../svg/katieicon.png";

const AboutPage = () => (
  <div className={styles}>
    <div className = "aboutPage">


    <div className = "parent">
      <div className="div1"><img src={selfie} alt="graphic" className="selfie" /></div>
      <div className="div2">    <p className="bio">
        <div className="title">Hi There!</div>
        <p>
      My name is Katie Stout, I'm a UI UX Designer and Front End Web Developer, with a background in
      painting and drawing. 
      
      
      I absolutely love to create wireframes, to design icons and graphics, and to fiddle with CSS. 
       
      I have several years experience as a Full Stack Developer. What I
      really enjoy is the visual aspect of User Experience Design, as it has
      such an impact overall on what we create. 

      It is rewarding to come up with ideas for websites, and then be able to help create your own vision.
      </p>
    <p>
      Among my many hobbies I enjoy photography  (portrait and food photography), and I have recently begun to have an obsession with film cameras. 
      On a day off you will most likely find me on an outdoor adventure or hanging out with friends, typically with a camera within reach.
      </p>
    </p></div>
      <div className="div3">
        <div className = "iconDiv">
        <img src={icon} alt="icon" className="icon" />
        </div>
        
       </div>

    </div>
    
    </div>
  </div>
);
export default AboutPage;
