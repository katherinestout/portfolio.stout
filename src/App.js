import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import styles from "./global/sass/main.scss";


export default function App() {
  return (
    <Router>
    <div className={styles}>
 
      <Header />
      <Nav />
      <Footer />
    </div>
    </Router>
  );
}
