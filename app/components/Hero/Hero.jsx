import React from "react";
import styles from "./Hero.module.css";
import hero from "../../../public/hero.png";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <p>Hi, I am</p>
        <h1 className={styles.heroH1} style={{ color: "#FD6F00" }}>
          Muhammad Umair{" "}
        </h1>
        <h3 className={styles.heroH3}>UI & UX</h3>
        <h3 className={styles.heroH3 + " " + styles.designer}>Designer</h3>
        <p className={styles.heroP}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <button className={styles.button}>Hire Me</button>
      </div>

      <div className={styles.heroImg}>
        <div className={styles.circle}>
          <div className={styles.blinder}></div>
          <Image src={hero} alt="hero" />
        </div>
        <div className={styles.social_icons}>
          <FaFacebook size={25} />
          <FaTwitter size={25} />
          <FaInstagram size={25} />
          <FaLinkedin size={25} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
