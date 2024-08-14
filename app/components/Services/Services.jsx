import Image from "next/image";
import React from "react";
import styles from "./Services.module.css";
import uiux from "../../../public/uiux.png";
import webdesign from "../../../public/webdesign.png";
import appdesign from "../../../public/appdesign.png";
import graphicdesign from "../../../public/graphic.png";

const Services = () => {
  return (
    <div className={styles.services} id="services">
      <h1>Services</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>

      <div className={styles.services_container}>
        <div className={styles.service}>
          <div className={styles.circle}>
            <Image src={uiux} />
          </div>

          <h3>UI/UX</h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum{" "}
          </p>
        </div>

        <div className={styles.service}>
          <div className={styles.circle}>
            <Image src={webdesign} />
          </div>

          <h3>Web Design</h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum{" "}
          </p>
        </div>

        <div className={styles.service}>
          <div className={styles.circle}>
            <Image src={appdesign} />
          </div>

          <h3>App Design</h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum{" "}
          </p>
        </div>

        <div className={styles.service}>
          <div className={styles.circle}>
            <Image src={graphicdesign} />
          </div>

          <h3>Graphic Design</h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
