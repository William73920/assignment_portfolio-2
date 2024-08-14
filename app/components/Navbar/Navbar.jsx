"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import logo from "../../../public/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" />
      </div>

      <div className={styles.links + " " + (open ? styles.open : "")}>
        <ul>
          <li>
            {" "}
            <a href="#home">Home</a>
          </li>
          <li>
            {" "}
            <a href="#about">About</a>
          </li>
          <li>
            {" "}
            <a href="#services">Services</a>
          </li>
          <li>
            {" "}
            <a href="#projects">Projects</a>
          </li>
          <li>
            {" "}
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className={styles.button}>Download CV</div>
      </div>
      <div
        className={styles.burger + " " + (open ? styles.open : "")}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </div>
  );
};

export default Navbar;
