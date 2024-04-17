"use client";

import React from "react";
import ScrollAnimation from "@/ScrollAnimation";
import { motion } from "framer-motion";
import styles from "@/app/page.module.scss";

const OpenVacancies = () => {
  return (
    <div style={{ width: "95%" }}>
      <h1 style={{ fontSize: "3em" }}>Open Vacancies</h1>
      <div className={styles.cardContainer}>
        <motion.div className={styles.card}>
          <h2>Frontend Developer</h2>
          <ul>
            <li>Full Time</li>
            <li>Remote</li>
            <li>Salary: $100k</li>
          </ul>

          <motion.button className={styles.btn} whileHover={{ scale: 1.05 }}>See Details</motion.button>
        </motion.div>
        <motion.div className={styles.card}>
          <h2>Frontend Developer</h2>
          <ul>
            <li>Full Time</li>
            <li>Remote</li>
            <li>Salary: $100k</li>
          </ul>

          <motion.button className={styles.btn} whileHover={{ scale: 1.05 }}>
            See Details
          </motion.button>
        </motion.div>
        <motion.div className={styles.card}>
          <h2>Frontend Developer</h2>
          <ul>
            <li>Full Time</li>
            <li>Remote</li>
            <li>Salary: $100k</li>
          </ul>

          <motion.button className={styles.btn} whileHover={{ scale: 1.05 }}>
            See Details
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default OpenVacancies;
