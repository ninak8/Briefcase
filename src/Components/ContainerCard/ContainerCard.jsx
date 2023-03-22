import React from "react";
import Card from "../Card/Card";
import img from "../../images/validation.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { lightGreen } from "@mui/material/colors";

import styles from "./ContainerCard.module.css";

const Proyects = (props) => {
  const proyects = [
    {
      name: "Weather App",
      photo: "https://i.ibb.co/kybDsj7/app-clima.png",
      tec: "React · Material-Ui",
      descripción:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo odit hic alias. Sunt libero aspernatur laborum beatae. Dolore quidem dignissimos pariatur repellendus ut quis esse sed mollitia, dicta perspiciatis?",
      github: "",
      link: "",
    },
    {
      name: "Dogy!",
      photo: img,
      tec: "React · redux · express",
      descripción:
        "AAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAA  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo odit hic alias. Sunt libero aspernatur laborum beatae. Dolore quidem dignissimos pariatur repellendus ut quis esse sed mollitia, dicta perspiciatis?",
      github: "https://github.com/ninak8/PI-Dogs-main",
      link: "#",
    },
    {
      name: "SpaceFood",
      photo: img,
      tec: "React · redux · express · Material-Ui",
      descripción:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo odit hic alias. Sunt libero aspernatur laborum beatae. Dolore quidem dignissimos pariatur repellendus ut quis esse sed mollitia, dicta perspiciatis?",
      github: "https://github.com/EXPRESSFOOD2",
      link: "https://spacefood.netlify.app/",
    },
  ];

  return (
    <div className={styles.proyects} id="proyects">
      <div className={styles.title}>
        <KeyboardArrowRightIcon sx={{ color: lightGreen[800], fontSize: 30 }} />
        <h2>Mis proyectos</h2>
        <img src={img} alt="lala" className={styles.esto} />
      </div>

      <div className={styles.container}>
        {proyects.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            photo={item.photo}
            description={item.descripción}
            tec={item.tec}
            link={item.link}
            github={item.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Proyects;
