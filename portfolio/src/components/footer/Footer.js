import styles from "./footer.scss";

const Footer = () => (
  <div className={styles}>
    <footer>
      <ul className="footer-items">
        <li className="footer-item">Github</li>
        <li className="footer-item">LinkedIn</li>
        <li className="footer-item">stout.katie@outlook.com</li>
      </ul>
      <p className="name-tag">Katie Stout 2021</p>
    </footer>
  </div>
);
export default Footer;
