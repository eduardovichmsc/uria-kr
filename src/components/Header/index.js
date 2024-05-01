"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const { scrollYProgress } = useScroll();

  const [hookedYPostion, setHookedYPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
  });

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={
        hookedYPostion > 0.33
          ? `${styles.header} ${styles.active}`
          : `${styles.header}`
      }
    >
      <motion.div className={`${styles.header_inner} container`}>
        <Link href={"/"}>URIA</Link>
        <span className={styles.menu_button}>
          <span className={styles.menu_line}></span>
          <p>Menu</p>
        </span>
        <Link
          href={"/cart"}
          style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}
        >
          <p>Cart</p>
          <p className={styles.cart_badge}>0</p>
        </Link>
      </motion.div>
    </motion.header>
  );
}
