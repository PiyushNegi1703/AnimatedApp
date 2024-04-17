"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "@/ScrollAnimation";
import styles from "@/app/page.module.scss";

const ExplainSection = () => {
  return (
    <ScrollAnimation
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
      }}
      className={styles.explainContainer}
    >
      <div>
        <span>
          Let your friends, family, and co-workers (anonymously) rate your
          social skills
        </span>
        <h1>Ever wondered what others think of you?</h1>
      </div>
      <motion.div className={styles.sunTimeline}>
        <div className={styles.dotted}></div>
        <motion.div className={styles.sunContainer}>
          <motion.div className={styles.sun}>1</motion.div>
          <p>Answer questions on your social skills</p>
        </motion.div>
        <motion.div className={styles.sunContainer}>
          <motion.div className={styles.sun}>2</motion.div>
          <p>Let others anonymously answer the same questions about you</p>
        </motion.div>
        <motion.div className={styles.sunContainer}>
          <motion.div className={styles.sun}>3</motion.div>
          <p>
            Find out where you and others see things the same way - and where
            not
          </p>
        </motion.div>
      </motion.div>

      <motion.div className={styles.peopleTimeline}>
        <div className={styles.line}></div>
        <motion.div className={`${styles.peopleContainer} ${styles.cont}`}>
          <p style={{ backgroundColor: "lightpink" }}>You</p>
          <motion.div
            style={{ backgroundColor: "lightpink" }}
            className={styles.circle}
          ></motion.div>
        </motion.div>
        <motion.div className={styles.peopleContainer}>
          <motion.div
            style={{ backgroundColor: "aqua" }}
            className={styles.circle}
          ></motion.div>
          <p style={{ backgroundColor: "aqua" }}>Anonymous 1</p>
        </motion.div>
        <motion.div className={`${styles.peopleContainer} ${styles.cont}`}>
          <p style={{ backgroundColor: "lightcoral" }}>Anonymous 2</p>
          <motion.div
            style={{ backgroundColor: "lightcoral" }}
            className={styles.circle}
          ></motion.div>
        </motion.div>
        <motion.div className={styles.peopleContainer}>
          <motion.div
            style={{ backgroundColor: "green" }}
            className={styles.circle}
          ></motion.div>
          <p style={{ backgroundColor: "green" }}>Anonymous 3</p>
        </motion.div>
      </motion.div>
    </ScrollAnimation>
  );
};

export default ExplainSection;
