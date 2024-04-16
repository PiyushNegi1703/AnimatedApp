"use client";

import React, { useRef } from "react";
import { LayoutGroup, motion, useInView } from "framer-motion";
import ScrollAnimation from "@/ScrollAnimation";
import styles from "@/app/page.module.scss";

const timeline = [
  {
    title: "The problem",
    content:
      "Self-improvement is a multi-billion dollar industry. But it’s not working. The industry is built on the idea that you’re not good enough as you are. It’s a never-ending cycle of self-doubt and self-criticism. It’s a trap that keeps you stuck in a cycle of self-improvement that never ends.",
  },
  {
    title: "The solution",
    content:
      "We’re building a new kind of self-improvement app. One that helps you focus on what’s already great about you. One that helps you build on your strengths, rather than focusing on your weaknesses. One that helps you become the best version of yourself, without losing sight of who you are.",
  },
  {
    title: "The result",
    content:
      "Our app is designed to help you build a better relationship with yourself. To help you see yourself in a new light. To help you become the best version of yourself, without losing sight of who you are. To help you build a life that you love, rather than one that you feel you need to escape from.",
  },
  {
    title: "The future",
    content:
      "We believe that self-improvement should be about building on your strengths, rather than focusing on your weaknesses. We believe that self-improvement should be about becoming the best version of yourself, rather than trying to be someone you’re not. We believe that self-improvement should be about building a life that you love, rather than one that you feel you need to escape from.",
  },
  {
    title: "The mission",
    content:
      "Our mission is to help you build a better relationship with yourself. To help you see yourself in a new light. To help you become the best version of yourself, without losing sight of who you are. To help you build a life that you love, rather than one that you feel you need to escape from.",
  },
];

const SelfImprovement = () => {
    const ref = useRef(null);

  return (
    <div>
      <ScrollAnimation
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 },
          },
        }}
        className={styles.selfImprovementContainer}
      >
        <motion.div className={styles.textContainer}>
          <span>Wrong with self-improvement & how we&apos;re fixing it</span>
          <h1>Self-improvement. Ugh.</h1>
        </motion.div>
        <motion.div className={styles.timelineWrapper}>
          <LayoutGroup id="timeline">
            <motion.div className={styles.iterator} />
            {timeline.map((item, index) => (
              <motion.div key={index} className={styles.timelineContainer}>
                <motion.div className={styles.timeline} layoutId="timeline" />
                <ScrollAnimation
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, delay: 0.5 },
                    },
                  }}
                >
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </ScrollAnimation>
              </motion.div>
            ))}
          </LayoutGroup>
        </motion.div>
      </ScrollAnimation>
    </div>
  );
};

export default SelfImprovement;
