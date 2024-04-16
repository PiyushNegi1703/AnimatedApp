"use client";

import React, { useState } from "react";
import styles from "@/app/page.module.scss";
import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/Logo.png";

const navlinks = [
  { title: "Emotions", color: "#FF008C" },
  { title: "Manifesto", color: "#D309E1" },
  { title: "Self-awareness test", color: "#9C1AFF" },
  { title: "Work With Us", color: "#7700FF" },
];

const Navbar = () => {
  const [selected, setSelected] = useState("");

  function handleClick(title: string) {
    if (selected !== title) {
      setSelected(title);
    } else {
      setSelected("");
    }
  }

  return (
    <motion.div className={styles.navbar}>
      <Image src={logo} alt="" width={60} height={60} />
      <LayoutGroup id="underline">
        <ul>
          {navlinks.map((link) => (
            <motion.li
              key={link.title}
              className={`${styles.navlink} ${
                selected === link.title && styles.selected
              }`}
              style={{ color: link.title === selected ? link.color : "black" }}
              onClick={() => handleClick(link.title)}
              whileHover={{ color: link.color }}
            >
              {link.title}
              {selected === link.title && (
                <motion.div
                  layoutId="underline"
                  className={styles.underline}
                  initial={false}
                  animate={{ backgroundColor: link.color }}
                />
              )}
            </motion.li>
          ))}
        </ul>
      </LayoutGroup>
      <motion.button
        className={styles.downloadButton}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
      >
        Download
      </motion.button>
    </motion.div>
  );
};

export default Navbar;
