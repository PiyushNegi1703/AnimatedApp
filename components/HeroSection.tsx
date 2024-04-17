"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import mobile from "@/public/Mobile.png";
import ghost1 from "@/public/ghost1.png";
import ghost2 from "@/public/ghost2.png";
import ghost3 from "@/public/ghost3.png";

const HeroSection = () => {
  return (
    <motion.div
      className={styles.heroContainer}
      animate={{
        opacity: [0, 0.5, 1],
        y: [100, 0],
        transition: { duration: 1 },
      }}
    >
      <div className={styles.heroText}>
        <span>Ahead app</span>
        <h1>
          Master your life <br /> by mastering <br /> emotions
        </h1>
        <motion.button className={styles.btn} whileHover={{ scale: 1.05 }}>Get App</motion.button>
      </div>

      <motion.div
        className={styles.heroImageContainer}
        animate={{
          scale: [0, 1],
          transition: { type: "spring", duration: 1, delay: 0.5},
        }}
      >
        <motion.div
          className={styles.dottedCircle}
          animate={{
            rotate: [0, 250],
            transition: { duration: 2, delay: 0.5 },
          }}
        >
          <motion.div animate={{ rotate: [0, 100] }} className={styles.sticker1}>
            <Image src={ghost1} alt="ghost" width={70} />
          </motion.div>
          <motion.div animate={{ rotate: [0, 100] }} className={styles.sticker2}>
            <Image src={ghost2} alt="ghost" width={70} />
          </motion.div>
          <motion.div animate={{ rotate: [0, 100] }} className={styles.sticker3}>
            <Image src={ghost3} alt="ghost" width={70} />
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.circle}
          animate={{
            transition: { duration: 1, ease: "anticipate" },
          }}
        />
        <Image
          src={mobile}
          alt="Mobile"
          width={270}
          height={500}
          className={styles.mobileImage}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
