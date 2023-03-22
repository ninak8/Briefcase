import React from "react";
import img from "../../images/nadian.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { lightGreen } from "@mui/material/colors";
import styles from "./about.module.css";

const About = (props) => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.superContainer}>
        <div className={styles.container}>
          <img src={img} alt="Nadia" className={styles.nadia} />

          <div className={styles.myInfo}>
            <div className={styles.title}>
              <KeyboardArrowRightIcon
                sx={{ color: lightGreen[800], fontSize: 30 }}
              />
              <h2>¿Quién soy?</h2>
              <img src={img} alt="lala" className={styles.esto} />
            </div>
            <p>
              Soy alguien que disfruta el desarrollo web, actualmente es algo
              que me apasiona, y ansío seguir aprendiendo, me alegra haber
              elegido esta carrera antes que cualquier otra. Recientemente, me
              gradué de un Bootcamp como Full Stack y quiero comenzar a
              desarrollar mi carrera en el mundo de la tecnología.
              <br />
              <br />
              Soy alguien optimista, empática, comprometida con sus tareas y
              perseverante. Me gustan los retos tanto como aprender cosas
              nuevas, también recordar mis inicios y ver mi crecimiento tanto
              personal como profesional
              <br />
              <br />
              Las veces que no estoy codeando estoy viendo una pelicula o
              pasando tiempo con mis gatos o leyendo algún libro o manga
              <br />
              <br />
              Algunas de mis recientes Tecnologias de trabajo son...
            </p>
            <div className={styles.list}>
              <div className={styles.left}>
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Redux</li>
                </ul>
              </div>
              <div className={styles.right}>
                <ul>
                  <li>PostgreSQL</li>
                  <li>Express</li>
                  <li>Node</li>
                </ul>
              </div>
            </div>
            <button className={styles.cv}>Mira mi curriculum</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
