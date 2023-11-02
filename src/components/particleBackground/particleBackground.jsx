import React from "react";
import styles from "./particleBackground.module.css";

const ParticleBackground = () => {
  // Generar un array de elementos <span> con estilos personalizados
  const generateParticles = () => {
    const particles = [];
    for (let i = 1; i <= 28; i++) {
      const spanStyle = {
        "--i": i,
      };
      particles.push(
        <span key={i} style={spanStyle} className={styles.particle}></span>
      );
    }
    return particles;
  };

  return (
    <div className={styles.particles}>
      {generateParticles()}
    </div>
  );
};

export default ParticleBackground;
