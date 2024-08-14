import React from "react";
import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <div className={styles.cta} id="contact">
      <h1>Lets Design Together </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus <br /> netus in. Aliquet donec morbi convallis pretium
      </p>

      <div className={styles.contact_container}>
        <input placeholder="Enter your name" type="email" />
        <button type="submit">Contact Me</button>
      </div>
    </div>
  );
};

export default CTA;
