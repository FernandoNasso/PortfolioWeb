import React from "react";
import styles from "./proyects.module.css";
import ProjectCard from "./projectCard"; 

const projects = [
  {
    name: "E-commerce 'Espacio Flipante'",
    description:
    "Group work, a great collaborative working experience in creating a complete and complex application with its Admin Dashboard, filters, payment gateway, database, registration, and much more.",    
    deployLink: "https://espacio-flipante-pf.vercel.app",
    githubLink: "https://github.com/FernandoNasso?tab=repositories",
    image: require("../../assets/espacioFlipante.PNG"), 
  },
  {
    name: "App Food",
    description:
    "Individual Project. It's a single-page application (SPA) with full CRUD functionality, allowing you to create, edit, delete, and get details of recipes, providing a comprehensive user experience.",
    githubLink: "https://github.com/FernandoNasso/PI-Food",
    image: require("../../assets/appFood.PNG"),
  },
  {
    name: "Rick & Morty App",
    description:
      "This app was my first project and source of pride. It utilizes the official Rick and Morty series API to provide a complete CRUD functionality, along with filters, sorting, favorites, user registration, and more.",    
    githubLink: "https://github.com/FernandoNasso/Rick_and_Morty_Nasso",
    image: require("../../assets/RickAndMorty.PNG"),
  },
];

const Proyects = () => {
  return (
    <div className={styles.proyectsContainer}>
      <h1>My featured projects</h1>
      <div className={styles.cardContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Proyects;
