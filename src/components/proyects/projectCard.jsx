import React, { useState } from "react";
import { BiLogoGithub } from "react-icons/bi";
import styles from "./projectCard.module.css";

const ProjectCard = ({ name, description, deployLink, githubLink, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.projectCard} onClick={isModalOpen ? closeModal : undefined}>
      <div className={styles.front} onClick={toggleModal}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <button className={styles.infoButton}>+ info</button>
      </div>
  
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
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
              <button onClick={closeModal}>Return</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );  
};

export default ProjectCard;
