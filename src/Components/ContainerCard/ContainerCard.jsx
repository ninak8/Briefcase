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
        "Busque una ciudad ubicada en cualquier parte del mundo y la aplicación muestra una tarjeta con la información meteorológica actual de la ciudad buscada. Además, al hacer 'clic' en una tarjeta, muestra en detalle el estado del tiempo de la ciudad seleccionada.",
      github: "https://github.com/ninak8/Weather-App",
      link: "",
    },
    {
      name: "Dogy!",
      photo: "https://i.ibb.co/hFb9xrF/dogy.png",
      tec: "React · redux · express",
      descripción:
        "Aplicación que muestra perros traídos mediante el uso de una API externa y una base de datos; la aplicación es capaz de: filtrar por raza u origen, también ordenar alfabeticamente, y permite crear un nuevo perro que será guardado y posteriormente mostrado. El reto de este proyecto fue desarroyarlo sin ningún framework o librería",
      github: "https://github.com/ninak8/PI-Dogs-main",
      link: "",
    },
    {
      name: "SpaceFood",
      photo: img,
      tec: "React · redux · express · Material-Ui",
      descripción:
        "Es una aplicación Full Stack, para el comercio electrónico de Alimentos, en el formato multitienda, la cual cuenta con autenticación de terceros basada en Google, envío de notificaciones mediante correo electrónico, y almacenamiento de multimedia en la nube entre otras funciones.",
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
