import styles from "./footer.scss";

const Footer = () => (
  // <Router>
  <div className={styles}>
    <footer>
      <ul className="footer-items">
        <li className="footer-item">
          <a href="https://github.com/katherinestout">
            <img
              src="https://img.icons8.com/ios-filled/40/ffffff/github.png"
              alt="github-icon"
            />
            <span> Github</span>
          </a>
        </li>
        <li className="footer-item">
          <a href="https://www.linkedin.com/in/katherinejstout/">
            <img
              src="https://img.icons8.com/material-sharp/40/ffffff/linkedin--v1.png"
              alt="linkedIn-icon"
            />
            <span> LinkedIn</span>
          </a>
        </li>
        <li className="footer-item">
          <img
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/40/ffffff/external-email-business-kiranshastry-lineal-kiranshastry.png"
            alt="email-icon"
          />
          <span> stout.katie@outlook.com</span>
        </li>
      </ul>
      {/* <p className="name-tag">&#169; Katie Stout 2021</p> */}
    </footer>
  </div>
  // </Router>
);
export default Footer;
