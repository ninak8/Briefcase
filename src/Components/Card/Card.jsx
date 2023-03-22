import React from "react";
import styles from "./Card.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { lightGreen } from '@mui/material/colors';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.photo} alt="proyecto" className={styles.image} />

      <div className={styles.info}>
        <span>{props.tec}</span>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        
      <div className={styles.links}>
      <a target="_blank" href={props.github}>
        <GitHubIcon sx={{ color: lightGreen[800], fontSize: 30 }}/>
      </a>
      <a target="_blank" href={props.link}>
        <LinkIcon sx={{ color: lightGreen[800], fontSize: 30 }}/>
      </a>
      </div>
      </div>
    </div>
  );
};

export default Card;
