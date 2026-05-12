import React from 'react';
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.brand}>
          <h4>BrandName</h4>
          <p>Building modern web experiences with clean design, fast performance, and intuitive interactions.</p>
        </div>
        <div className={styles.quickLinks}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p>
        <div className={styles.socials}>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
