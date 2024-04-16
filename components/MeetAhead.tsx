"use client";

import ScrollAnimation from "@/ScrollAnimation";
import React from "react";
import { motion } from "framer-motion";
import styles from "@/app/page.module.scss";

const MeetAhead = () => {
  return (
    <ScrollAnimation
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
      }}
      className={styles.meetaheadContainer}
    >
      <motion.div className={styles.left}>
        <motion.div className={styles.heading}>
          <span>Built out of frustation</span>
          <h1>Meet the ahead app</h1>
        </motion.div>
        <motion.div
          className={styles.imageContainer}
        ></motion.div>
        <ScrollAnimation
          variants={{
            hidden: { x: 150, y: 0 },
            visible: {
              x: -150,
              y: -70,
              transition: {
                x: { duration: 2, delay: 0.5 },
                y: { duration: 2, delay: 2 },
              },
            },
          }}
          className={styles.circleContainer}
        >
          <motion.div className={styles.circle}></motion.div>
        </ScrollAnimation>
      </motion.div>
      <motion.div className={styles.right}>
        <p>
          A personalized pocket coach that provides bite-sized, science-driven
          tools to boost emotional intelligence.
        </p>
        <br />
        <p>
          Think of it as a pocket cheerleader towards a better, more fulfilling.
        </p>
      </motion.div>
    </ScrollAnimation>
  );
};

export default MeetAhead;
