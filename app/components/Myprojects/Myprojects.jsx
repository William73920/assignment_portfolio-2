"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Myprojects.module.css";
import Image from "next/image";
import webdesign1 from "../../../public/webdesign1.png";
import webdesign2 from "../../../public/webdesign2.png";
import webdesign3 from "../../../public/webdesign3.png";
import gsap from "gsap";
import { categories, projects } from "@/app/constants/data";

const Myprojects = () => {
  const [selectedCategory, setCategory] = useState("All");

  const projectRef = useRef([]);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    gsap.fromTo(
      projectRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 }
    );
  }, [selectedCategory, filteredProjects.length]);

  return (
    <div className={styles.myprojects} id="projects">
      <h1>My Projects</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
        est risus <br /> lectus. Phasellus consequat urna tellus{" "}
      </p>

      <div className={styles.category_container}>
        {categories.map((category) => (
          <div
            onClick={() => setCategory(category)}
            className={styles.category}
            key={category}
            style={{
              backgroundColor:
                selectedCategory === category ? "#FD6F00" : "#ffffff",
              color: selectedCategory === category ? "white" : "black",
            }}
          >
            <p className={styles.category_text}>{category}</p>
          </div>
        ))}
      </div>

      <div className={styles.projects_container}>
        {filteredProjects.map((project, index) => (
          <div
            className={styles.project}
            key={project.id}
            ref={(el) => (projectRef.current[index] = el)}
          >
            <div className={styles.image_container}>
              <Image src={project.imageUrl} alt={project.title} />
            </div>
            <p className={styles.card_category}>{project.category}</p>
            <h3 className={styles.title}>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myprojects;
