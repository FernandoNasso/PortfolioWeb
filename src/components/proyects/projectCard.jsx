// import React, { useState } from "react";
// import styles from "./projectCard.module.css";
// import { BiLogoGithub } from "react-icons/bi";

// const ProjectCard = ({ name, description, deployLink, githubLink, image }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleCardFlip = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div className={isFlipped ? `${styles.card} ${styles.flipped}` : styles.card}>
//       <div className={styles.front}>
//         <img src={image} alt={name} />
//         <button className={styles["info-button"]} onClick={handleCardFlip}>
//           + Info
//         </button>
//       </div>
//       <div className={styles.back}>
//         <h2>{name}</h2>
//         <p>{description}</p>
//         {deployLink && (
//           <a href={deployLink} target="_blank" rel="noopener noreferrer">
//             Ver Proyecto
//           </a>
//         )}
//         <a href={githubLink} target="_blank" rel="noopener noreferrer">
//           <div className={styles.iconWrapper}>
//             <BiLogoGithub className={styles.reactIcon} />
//             <span className={styles.iconName}>GitHub</span>
//           </div>
//         </a>
//         <button className={styles["info-button"]} onClick={handleCardFlip}>
//           Return
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import React, { useState } from "react";
import { BiLogoGithub } from "react-icons/bi";
import styles from "./projectCard.module.css"; // Asegúrate de crear el archivo CSS correspondiente

const ProjectCard = ({ name, description, deployLink, githubLink, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={styles.projectCard}>
      <h2>{name}</h2>
      <img src={image} alt={name} />

      <button onClick={toggleDetails}>+ Info</button>

      {showDetails && (
        <div className={styles.projectDetails}>
          <h3>{name}</h3>
          <p>{description}</p>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <BiLogoGithub className={styles.reactIcon} /> GitHub
            </a>
          )}
          {deployLink && (
            <a href={deployLink} target="_blank" rel="noopener noreferrer">
              Deploy
            </a>
          )}
          <button onClick={toggleDetails}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
