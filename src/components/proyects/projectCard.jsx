import React, { useState } from "react";
import { BiLogoGithub } from "react-icons/bi";
import styles from "./projectCard.module.css";

const ProjectCard = ({ name, description, deployLink, githubLink, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlipped = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.projectCard} ${isFlipped ? styles.flipped : ""}`}
      onClick={toggleFlipped}
    >
      <div className={styles.front}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <button className={styles.infoButton}>+ info</button>
      </div>
      <div className={styles.back}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.linksContainer}>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <BiLogoGithub className={styles.reactIcon} />
            </a>            
          )}
          {deployLink && (
            <a href={deployLink} target="_blank" rel="noopener noreferrer" className={styles.deploy}>
              Deploy
            </a>
          )}
          <button onClick={toggleFlipped}>Return</button>
          </div>
        </div>
      </div>
    );
  };

export default ProjectCard;
