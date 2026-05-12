import React from "react";
import  styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Build Modern Web Apps Faster</h1>
        <p>
          Create stunning web experiences with clean design,
          powerful components, and modern architecture.
        </p>
        <div className={styles.heroButtons}>
          <button className={styles.startBtn}>Start Free</button>
          <button className={styles.learnBtn}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;