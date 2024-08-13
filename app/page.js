import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Aboutme from "./components/About_me/Aboutme";
import Services from "./components/Services/Services";
import Myprojects from "./components/Myprojects/Myprojects";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <Aboutme />
        <Services />
        <Myprojects />
      </main>
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
