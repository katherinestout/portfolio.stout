import styles from "./header.scss";
import headerGraphic from "./../../svg/headerGraphic.png";

const Header = () => (
  <div className={styles}>
    <img src={headerGraphic} alt="headerGraphic" className="headerGraphic"/>
    <header>
      {/* <h1>Katie Stout</h1>
      <h2>UI/UX Designer </h2> */}
      
    </header>
  </div>
);

export default Header;
