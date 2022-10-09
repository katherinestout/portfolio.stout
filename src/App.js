import React from "react";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import styles from "./global/sass/main.scss";


export default function App() {
  return (

    <div className={styles}>
      <Header />
      <Nav />
      <Footer />
    </div>

  );
}
