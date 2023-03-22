import React from "react";
import img from "../../images/nadian4.jpg";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <div className={styles.background}>
          <img src={img} alt="nadia cartoon" className={styles.cartoon} />
        </div>
        <span>Nadia Carrizo</span>
      </div>
      <div className={styles.links}>
        <a href="#about">
          <span>Sobre mi</span>
        </a>
        <a href="#proyects">
          <span>Proyectos</span>
        </a>
        <a href="mailto:nina.kirishima77@gmail.com">
          <button className={styles.speack}>Hablemos!</button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
