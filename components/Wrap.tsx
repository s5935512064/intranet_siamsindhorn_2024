"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
  exit: { opacity: 0, x: 0, y: 0 },
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Wrap: FC<Props> = ({ children }): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0% -50% 0%" });

  return (
    <>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        whileInView="enter"
        viewport={{ once: true }}
        className="w-full"
      >
        {children}
      </motion.div>
    </>
  );
};

export default Wrap;
