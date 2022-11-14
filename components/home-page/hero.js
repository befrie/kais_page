import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/zombie.jpg"
          alt="Kai maskiert"
          width={250}
          height={300}
        ></Image>
      </div>
      <h1>Hallo, mein Name ist Kai Banke!</h1>
      <p>Hier seht ihr eine Auswahl aus meiner Gitarren Manufaktur.</p>
    </section>
  );
}

export default Hero;
