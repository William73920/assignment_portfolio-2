"use client";
import React from "react";
import styles from "./Aboutme.module.css";
import Image from "next/image";
import AboutMe from "../../../public/aboutme.png";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Aboutme = () => {
  return (
    <div className={styles.aboutme} id="about">
      <div className={styles.aboutme_img}>
        <div className={styles.circle}>
          <div className={styles.blinder}></div>
          <Image src={AboutMe} />
        </div>
      </div>

      <div className={styles.aboutme_text}>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <label htmlFor="website-design">UX</label>
            <RangeSlider
              className={styles.single_thumb}
              defaultValue={[0, 90]}
              thumbsDisabled={[true, true]}
              rangeSlideDisabled={true}
            />
          </div>

          <div className={styles.skill}>
            <label htmlFor="website-design">Website Design</label>
            <RangeSlider
              className={styles.single_thumb}
              defaultValue={[0, 80]}
              thumbsDisabled={[true, true]}
              rangeSlideDisabled={true}
            />
          </div>

          <div className={styles.skill}>
            <label htmlFor="website-design">App Design</label>
            <RangeSlider
              className={styles.single_thumb}
              defaultValue={[0, 95]}
              thumbsDisabled={[true, true]}
              rangeSlideDisabled={true}
            />
          </div>
          <div className={styles.skill}>
            <label htmlFor="website-design">Graphic Design</label>
            <RangeSlider
              className={styles.single_thumb}
              defaultValue={[0, 90]}
              thumbsDisabled={[true, true]}
              rangeSlideDisabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
