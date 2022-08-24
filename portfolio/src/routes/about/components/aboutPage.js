//import React from 'react';
import styles from "./../styles/aboutPage.scss";
import selfie from "./../../../svg/selfie.png";

const AboutPage = () => (
  <div className={styles}>
    <img src={selfie} alt="graphic" className="selfie" />
    <p className="bio">
      I'm a UI/UX Designer and Front End Web Developer, with a background in
      Painting and Drawing. I am also a wedding and portrait Photographer! I
      absolutely love to create wireframes, design icons, and fiddle with CSS
      animations. While I have experience as a Full Stack Developer, what I
      really enjoy is the visual aspect of User Experience Design, as it has
      such an impact overall on what we create.
    </p>

    <p>
      A link to my previous portfolio (2019): 
      https://katherinestout.github.io/KatStout_ReactPortfolio/
    </p>
  </div>
);
export default AboutPage;
