"use client";

import ScrollAnimation from "@/ScrollAnimation";
import React, { useEffect, useRef } from "react";
import styles from "@/app/page.module.scss";
import {
  LayoutGroup,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const carouselItems = [
  {
    id: 1,
    emoji: "🙂",
    title: "You are not alone",
    description:
      "We have all been there. The feeling of being overwhelmed, anxious, and stressed. The feeling of not being able to cope with the demands of life.",
    color: "#ff5733",
  },
  {
    id: 2,
    emoji: "🙂",
    title: "We are here to help",
    description:
      "Our app is designed to help you understand and manage your emotions. We provide you with the tools to help you navigate through life's ups and downs.",
    color: "#62f743",
  },
  {
    id: 3,
    emoji: "🙂",
    title: "Join us",
    description:
      "Join us on this journey of self-discovery and growth. Master your emotions and master your life.",
    color: "#b41a9e",
  },
  {
    id: 4,
    emoji: "🙂",
    title: "Sign up now",
    description:
      "Sign up now and get access to our full library of resources. Let's embark on this journey together.",
    color: "#3e80fb",
  },
  {
    id: 5,
    emoji: "🙂",
    title: "Start your journey",
    description:
      "Start your journey to a happier, healthier, and more fulfilling life. Sign up now and get access to our full library of resources.",
    color: "#f74343",
  },
  {
    id: 6,
    emoji: "🙂",
    title: "You are not alone",
    description:
      "We have all been there. The feeling of being overwhelmed, anxious, and stressed. The feeling of not being able to cope with the demands of life.",
    color: "#18c7e5",
  },
  {
    id: 7,
    emoji: "🙂",
    title: "We are here to help",
    description:
      "Our app is designed to help you understand and manage your emotions. We provide you with the tools to help you navigate through life's ups and downs.",
    color: "#f3a82d",
  },
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
  });

  const scroll = useTransform(scrollYProgress, [1, 0], ["-10%", "100%"]);

  return (
    <ScrollAnimation
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
      }}
      className={styles.carouselContainer}
    >
      <h1>Does this sound familiar...</h1>
      <motion.div
        className={styles.carousel}
        style={{ x: scroll }}
      >
        {carouselItems.map((item) => (
          <motion.div
            key={item.id}
            className={styles.carouselItem}
            whileHover={{ scale: 1.05 }}
            style={{ backgroundColor: item.color }}
          >
            <p>{item.emoji}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </ScrollAnimation>
  );
};

export default Carousel;
