import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.leftColumn}>
        <h1>Hello, I'm <br/>Fernando!</h1>
        <p className={styles.educationTitle}>Graduated from Henry bootcamp.</p>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.locationContainer}>
          <FaLocationDot className={styles.locationIcon} />
          <p>From Cordoba, Argentina.</p>
        </div>
        <p className={styles.legend}>Constantly seeking personal and professional development.</p>
      </div>
    </div>
  );
};

export default About;
