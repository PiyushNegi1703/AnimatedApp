"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import mobile from "@/public/Mobile.png";

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
          Master your life by <br /> mastering emotions
        </h1>
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
          <div className={styles.sticker1}></div>
          <div className={styles.sticker2}></div>
          <div className={styles.sticker3}></div>
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
