import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";
import { SiRedux, SiHtml5, SiCss3, SiReact, SiExpress, SiNodedotjs, SiSequelize, SiVite } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoGithub, BiLogoGit } from "react-icons/bi";
import { FaDatabase, FaNpm } from "react-icons/fa";
import styles from './header.module.css';
import myPhoto from "../../assets/yo.jpeg";

const Header = () => {
  // Ref para el elemento que contendrá el efecto de escritura
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  useEffect(() => {
    // Configuración de Typed.js para h1 (Fernando Nasso)
    const optionsH1 = {
      strings: ['Fernando Nasso'],
      typeSpeed: 100, // Velocidad de escritura
      showCursor: false, // Oculta el cursor de escritura
    };

    // Configuración de Typed.js para h2 (FullStack Developer)
    const optionsH2 = {
      strings: ['FullStack Developer'],
      typeSpeed: 100, // Velocidad de escritura
      showCursor: false, // Oculta el cursor de escritura
    };

    // Inicializa Typed.js en los elementos h1 y h2
    const typedH1 = new Typed(h1Ref.current, optionsH1);
    const typedH2 = new Typed(h2Ref.current, optionsH2);

    return () => {
      // Detiene Typed.js y limpia cuando el componente se desmonta
      typedH1.destroy();
      typedH2.destroy();
    };
  }, []);
  
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftColumn}>
        <img src={myPhoto} alt="Fernando Nasso" className={styles.headerImage} />
        <div className={styles.textContainer1}>
          <h1 ref={h1Ref}><span></span></h1>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.textContainer2}>
        <h2 ref={h2Ref}><span></span></h2>
        </div>
        <div className={styles.iconsContainer}>
          <div className={styles.iconWrapper}>
            <RiJavascriptFill className={styles.reactIcon} />
            <span className={styles.iconName}>JavaScript</span>
          </div>
          <div className={styles.iconWrapper}>
            <SiHtml5 className={styles.reactIcon} />
            <span className={styles.iconName}>HTML</span>
          </div>
          <div className={styles.iconWrapper}>
            <SiCss3 className={styles.reactIcon} />
            <span className={styles.iconName}>Css</span>
          </div>
          <div className={styles.iconWrapper}>
            <SiRedux className={styles.reactIcon} />
            <span className={styles.iconName}>Redux</span>
          </div>
          <div className={styles.iconWrapper}>
            <SiReact className={styles.reactIcon} />
            <span className={styles.iconName}>React</span>
          </div>
          <div className={styles.iconWrapper}>
            <SiVite className={styles.reactIcon} />
            <span className={styles.iconName}>Vite</span>
          </div>
          <div className={styles.iconWrapper}>
          <SiNodedotjs className={styles.reactIcon} />
          <span className={styles.iconName}>Node.JS</span>
          </div>
          <div className={styles.iconWrapper}>
          <SiExpress className={styles.reactIcon} />
          <span className={styles.iconName}>Express</span>
          </div>
          <div className={styles.iconWrapper}>
          <BiLogoPostgresql className={styles.reactIcon} />
          <span className={styles.iconName}>PostgreSQL</span>
          </div>
          <div className={styles.iconWrapper}>
          <FaDatabase className={styles.reactIcon} />
          <span className={styles.iconName}>Database</span>
          </div>
          <div className={styles.iconWrapper}>
          <FaNpm className={styles.reactIcon} />
          <span className={styles.iconName}>NPM</span>
          </div>
          <div className={styles.iconWrapper}>
          <BiLogoGit className={styles.reactIcon} />
          <span className={styles.iconName}>Git</span>
          </div>
          <div className={styles.iconWrapper}>
          <BiLogoGithub className={styles.reactIcon} />
          <span className={styles.iconName}>GitHub</span>
          </div>
          <div className={styles.iconWrapper}>
          <SiSequelize className={styles.reactIcon} />
          <span className={styles.iconName}>Sequelize</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
