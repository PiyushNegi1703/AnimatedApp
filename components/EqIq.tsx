"use client";

import React from "react";
import styles from "@/app/page.module.scss";
import { motion } from "framer-motion";
import ScrollAnimation from "@/ScrollAnimation";

const EqIq = () => {
  return (
    <ScrollAnimation
        variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 }},
        }}
        className={styles.eqiqContainer}
    >
      <motion.div className={styles.heading}>
        <h2>EQ beats IQ</h2>
      </motion.div>
      <motion.div className={styles.para1}>
        <p>
          People with high emotional intelligence (EQ) live more fulfilled
          lives. They tend to be happier and have healthier relationaships
        </p>
      </motion.div>
      <motion.div className={styles.para2}>
        <p>
          They are more successful in their pursuits and make for inspiring
          leaders. According to science, they earn $29k a year.
        </p>
      </motion.div>
    </ScrollAnimation>
  );
};

export default EqIq;
