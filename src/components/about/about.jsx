import React from "react";
import styles from "./about.module.css"

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1>About me</h1>
            <p>Hola, soy Fernando!</p>
            <p>Graduado en el bootcamp de Henry</p>
            <p>desde Cordoba, Argentina</p>
            <p>en constante busqueda del desarrollo personal y profesional</p>
        </div>
    );
};

export default About;