import React from "react";
import styles from "./Testimonials.module.css";
import Carousel from "../Carousel/Carousel";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      message:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      designation: "Software Engineer",
    },
    {
      id: 1,
      name: "John Doe",
      message:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      designation: "Software Engineer",
    },
    {
      id: 1,
      name: "John Doe",
      message:
        "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      designation: "Software Engineer",
    },
  ];
  return (
    <div className={styles.testimonials}>
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
