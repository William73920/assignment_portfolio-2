"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import Image from "next/image";

const Carousel = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(70);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.shiftKey) {
        e.preventDefault();
      }
    };

    const carouselElement = carouselRef.current;

    if (carouselElement) {
      carouselElement.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  useEffect(() => {
    const updateTranslateValue = () => {
      if (window.innerWidth <= 390) {
        setTranslateValue(120);
      } else if (window.innerWidth <= 420) {
        setTranslateValue(115);
      } else if (window.innerWidth <= 570) {
        setTranslateValue(110);
      } else if (window.innerWidth <= 926) {
        setTranslateValue(107); // Change to 100% for smaller screens
      } else {
        setTranslateValue(80);
      }
    };

    updateTranslateValue(); // Set initial value
    window.addEventListener("resize", updateTranslateValue); // Update on resize

    return () => {
      window.removeEventListener("resize", updateTranslateValue);
    };
  }, []);

  return (
    <>
      <div className={styles.carousel} ref={carouselRef}>
        {testimonials.map((test, index) => (
          <div
            key={test.id}
            className={styles.carousel_item}
            onClick={() => setActiveIndex(index)}
            style={{
              transform: `translateX(-${activeIndex * translateValue}%)`,
              opacity: activeIndex === index ? 1 : 0.5,
            }}
          >
            <div className={styles.image}>
              <Image
                priority
                width={235}
                height={235}
                src={test.image}
                alt={test.title}
              />
            </div>

            <div className={styles.content}>
              <p className={styles.message}>{test.message}</p>
              <h3 className={styles.name}>{test.name}</h3>
              <p className={styles.designation}>{test.designation}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {testimonials.map((test, index) => (
          <div
            key={test.id}
            className={`${styles.dot} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
