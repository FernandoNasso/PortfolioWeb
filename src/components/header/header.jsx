import React from 'react';
import { SiRedux, SiHtml5, SiCss3, SiReact, SiExpress, SiNodedotjs, SiSequelize, SiVite } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoGithub, BiLogoGit } from "react-icons/bi";
import { FaDatabase, FaNpm } from "react-icons/fa";
import styles from './header.module.css';
import myPhoto from "../../assets/yo.jpeg";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftColumn}>
        <img src={myPhoto} alt="Fernando Nasso" className={styles.headerImage} />
        <div className={styles.textContainer1}>
          <h1>Fernando Nasso</h1>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.textContainer2}>
          <h2>FullStack Developer</h2>
        </div>
        <div className={styles.iconsContainer}>
          <RiJavascriptFill className={styles.reactIcon} />
          <SiHtml5 className={styles.reactIcon} />
          <SiCss3 className={styles.reactIcon} />
          <SiRedux className={styles.reactIcon} />
          <SiReact className={styles.reactIcon} />
          <SiVite className={styles.reactIcon} />
          <SiNodedotjs className={styles.reactIcon} />
          <SiExpress className={styles.reactIcon} />
          <BiLogoPostgresql className={styles.reactIcon} />
          <FaDatabase className={styles.reactIcon} />
          <FaNpm className={styles.reactIcon} />
          <BiLogoGit className={styles.reactIcon} />
          <BiLogoGithub className={styles.reactIcon} />
          <SiSequelize className={styles.reactIcon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
