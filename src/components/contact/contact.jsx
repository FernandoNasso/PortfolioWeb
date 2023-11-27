import React from "react";
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Asumiendo que utilizas Font Awesome
import { LuFileDown } from "react-icons/lu";
import styles from "./contact.module.css";

const Contact = () => {
    return (
        <div className={styles.contactSection}>
            <h1>Contact me</h1>
            <div className={styles.contactIcons}>
                <a href="https://wa.me/+5491130993627" target="_blank" rel="noopener noreferrer" >
                    <FaWhatsapp />
                </a>
                <a href="mailto:fernando.nasso@gmail.com" target="_blank" rel="noopener noreferrer" >
                    <FaEnvelope />
                </a>
                <a href="https://github.com/FernandoNasso" target="_blank" rel="noopener noreferrer" >
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/fernando-nasso/" target="_blank" rel="noopener noreferrer" >
                    <FaLinkedin />
                </a>
            </div>
            <div className={styles.cvDownload}>
                <a href="https://drive.google.com/file/d/1XPwG3FcUBYmqegZueDEaUfDu--oo2AyC/view?usp=sharing" download="Fernando_Nasso_CV.pdf">
                <div className={styles.iconCV}>
                    <LuFileDown />
                </div>
                    <span className={styles.cvText}>Resume</span>
                </a>
            </div>

        </div>
    );
};

export default Contact;
