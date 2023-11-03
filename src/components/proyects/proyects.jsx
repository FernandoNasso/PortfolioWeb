import React from "react";
import styles from "./proyects.module.css";
import ProjectCard from "./projectCard"; // Asegúrate de que la ruta sea correcta

const projects = [
  {
    name: "E-commerce 'Espacio Flipante'",
    description:
      "Trabajo realizado en grupo para culminar los estudios en Henry. Fue una experiencia de trabajo colaborativo en la creación de una aplicación completa y compleja tanto para la experiencia de usuario cliente como del administrador. Logramos una aplicación intuitiva, moderna y completa, lo que resultó en una experiencia única.",
    deployLink: "https://espacio-flipante-pf.vercel.app",
    githubLink: "https://github.com/FernandoNasso?tab=repositories",
    image: require("../../assets/espacio flipante.png"), // Ruta a la imagen del proyecto
  },
  {
    name: "App Food",
    description:
      "Proyecto Individual desarrollado durante mi etapa en el bootcamp de Soy Henry. Es una aplicación de una sola página (SPA) que te permite explorar una variedad de recetas, provistas por la API spoonacular, crear tus propias recetas y realizar acciones como edición y eliminación. Además, proporciona detalles exhaustivos sobre cada receta en particular, brindando una experiencia completa.",
    githubLink: "https://github.com/FernandoNasso/PI-Food",
    image: require("../../assets/app food.png"),
  },
  {
    name: "Rick & Morty App",
    description:
      'Durante mi participación en el bootcamp de Soy Henry, desarrollé esta aplicación web. "Rick y Morty" es una plataforma que utiliza la API oficial de la serie para ofrecer información detallada sobre los personajes que aparecen en la misma. Los usuarios pueden buscar personajes, explorar sus detalles, aplicar filtros de búsqueda y guardar sus personajes favoritos para una experiencia personalizada.',
    githubLink: "https://github.com/FernandoNasso/Rick_and_Morty_Nasso",
    image: require("../../assets/r&mLanding.png"),
  },
];

const Proyects = () => {
  return (
    <div className={styles.proyectsContainer}>
      <h1>My Proyects</h1>
      <div className={styles.cardContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Proyects;
