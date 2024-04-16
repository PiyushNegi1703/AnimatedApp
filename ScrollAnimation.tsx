import React, { useEffect, useRef } from "react";
import { HTMLMotionProps, motion, useInView, useAnimation } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variants: {
    hidden: object;
    visible: object;
  };
}

const ScrollAnimation: React.FC<Props> = ({ children, variants, ...props }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [inView, animation]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={animation}
      ref={ref}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
