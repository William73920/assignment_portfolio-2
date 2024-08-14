import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_logo}>
        <Image src={logo} />
      </div>
      <div className={styles.footer_links}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.footer_social}>
        <FaFacebook size={25} />
        <FaTwitter size={25} />
        <FaInstagram size={25} />
        <FaLinkedin size={25} />
      </div>

      <p className={styles.copyright}>
        © 2023 <span style={{ color: "#FD6F00" }}>Mumair</span> All Rights
        Reserved , Inc.
      </p>
    </div>
  );
};

export default Footer;
