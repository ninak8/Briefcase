import React from "react";
import styles from "./iam.module.css";
import img from "../../images/nadian2.png";

const MyUser = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerCartoon}>
        <div className={styles.background}>
          <img src={img} alt="nadia cartoon" className={styles.cartoon} />
        </div>
      </div>
      <div className={styles.info}>
        <span>Hola mundo! mi nombre es... </span>
        <h1>Nadia Carrizo</h1>
        <p>Y soy Desarrolladora web Full Stack con orientación Frontend</p>
        <div className={styles.containerbutton}>
          <a href="mailto:nina.kirishima77@gmail.com">
            <button className={styles.view}>Dí Hola!</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyUser;
