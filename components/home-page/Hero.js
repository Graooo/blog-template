import React from "react";

import Image from "next/image";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/hutao.jpg"
          alt="An image showing Graooo"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Graooo</h1>
      <p>My blog is about web development - especially React JS</p>
    </section>
  );
};

export default Hero;
