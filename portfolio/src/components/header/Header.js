import styles from "./header.scss";
import headerGraphic from "./../../svg/headerGraphic2.png";

const Header = () => (
  <div className={styles}>
    <img src={headerGraphic} alt="headerGraphic" className="headerGraphic" />
    <header>
    </header>
  </div>
);

export default Header;
