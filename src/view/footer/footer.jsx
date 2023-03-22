import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { lightGreen } from "@mui/material/colors";

import styles from "./footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/nadia-carrizo-75b131250/"
        >
          <LinkedInIcon sx={{ color: lightGreen[800], fontSize: 30 }} />
        </a>
        <a href="mailto:nina.kirishima77@gmail.com">
          <EmailIcon sx={{ color: lightGreen[800], fontSize: 30 }} />
        </a>
        <a target="_blank" href="https://github.com/ninak8">
          <GitHubIcon sx={{ color: lightGreen[800], fontSize: 30 }} />
        </a>
      </div>
      <span>Desarrollado por Nadia</span>
    </div>
  );
};

export default Footer;
