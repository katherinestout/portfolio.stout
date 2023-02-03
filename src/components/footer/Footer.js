import styles from "./footer.scss";

const Footer = () => (
  // <Router>
  <div className={styles}>
    <footer>
      <ul className="footer-items">
        <li className="footer-item">
          <a href="https://github.com/katherinestout">
            <span> Github</span>
          </a>
        </li>
        <li className="footer-item">
          <a href="https://www.linkedin.com/in/katherinejstout/">
            <span> LinkedIn</span>
          </a>
        </li>
        <li className="footer-item">
          <span> katherinejstout@outlook.com</span>
        </li>
      </ul>
      {/* <p className="name-tag">&#169; Katie Stout 2021</p> */}
    </footer>
  </div>
  // </Router>
);
export default Footer;
