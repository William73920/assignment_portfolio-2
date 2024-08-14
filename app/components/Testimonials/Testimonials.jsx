import React from "react";
import styles from "./Testimonials.module.css";
import Carousel from "../Carousel/Carousel";
import { testimonials } from "@/app/constants/data";

const Testimonials = () => {
  return (
    <div className={styles.testimonials} id="testimonials">
      <h1 className={styles.heading}>Testimonials</h1>
      <p className={styles.para}>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus <br /> netus in. Aliquet donec morbi convallis pretium
      </p>

      <div className={styles.testimonials_container}>
        <Carousel testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Testimonials;
