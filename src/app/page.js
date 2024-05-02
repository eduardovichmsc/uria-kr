"use client";

import Image from "next/image";
import styles from "./Page.module.css";
import Link from "next/link";
import MainPageItem from "@/components/main/ProductItem";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ArrivalItem from "@/components/main/ArrivalItem";

export default function Home() {
  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const isAnimateInfinite = true;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main-wrapper">
      <div className={`flex ${styles.banner_wrapper}`}>
        <div className={styles.banner_item}>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, height: "max-content" }}
              transition={{ duration: 0.3 }}
              className={styles.banner_text}
            >
              See Beyond Beauty:
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, height: "max-content" }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className={styles.banner_text}
            >
              Experience Vision
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, height: "max-content" }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className={styles.banner_text}
            >
              Like Never Before
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={styles.about_link}
            onClick={executeScroll}
          >
            New Arrivals
          </motion.button>
        </div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: isAnimateInfinite }}
          className={styles.banner_item}
        >
          <Image
            src={"/main-L1.jpg"}
            width={785}
            height={600}
            className={styles.banner_image}
            alt="main_L1"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, y: 0 }}
        viewport={{ once: isAnimateInfinite }}
        className={`${styles.products_wrapper} container`}
      >
        <p className="section-title">Products</p>
        <div className="">
          <MainPageItem id="7" title="Yurial" />
          <MainPageItem id="12" title="Roze Airy" />
          <MainPageItem id="14" title="Made" />
          <MainPageItem id="21" title="Euroring" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: isAnimateInfinite }}
        className={`${styles.about_wrapper} container`}
      >
        <div className={`${styles.about_item} ${styles.about_image}`}>
          <Image fill={true} src={"/main_mov_bg.jpg"} alt="main_mov_bg" />
        </div>
        <div className={styles.about_item}>
          <p className="main-title">Brand Idea</p>
          <p className={styles.about_body}>
            In Korea, URIA is leading the way in lens innovation, blending
            timeless elegance with modern flair. Crafted with care and
            innovative design, our lenses redefine cool. At URIA, we're inviting
            you to see the world through lenses that scream quality and style.
            Our dedication to quality craftmanship and thinking outside the box
            sets us apart. So, welcome to URIA, where Korean spirit meets a
            fresh vision. It's a whole new view for your eyes.
          </p>
          <Link href={"/brand"} className={styles.about_link}>
            Read More
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, y: 0 }}
        viewport={{ once: isAnimateInfinite }}
        className={`${styles.arrivals_wrapper} container`}
        ref={myRef}
      >
        <p className="main-title">New Arrivals</p>
        <div className={styles.arrivals_grid}>
          <ArrivalItem
            grid_order="arrivals_1"
            url="serum brown"
            image="/item/thumb-7IS465867iM65287Jq0_500x500.jpg"
            title="Serum Brown"
            price="$26.20"
          />
          <ArrivalItem
            grid_order="arrivals_2"
            image="/item/thumb-7Jyg66as7JWM7IOB7ZKI7J206647KeA66y867mb_500x500.jpg"
            title="Mul Grey"
            price="$27.90"
          />
          <ArrivalItem
            grid_order="arrivals_3"
            image="/item/thumb-66Gc7JaE67iM65287Jq0_500x500.jpg"
            title="Royal Brown"
            price="$26.20"
          />
          <ArrivalItem
            grid_order="arrivals_4"
            image="/item/thumb-7Ja86re466CI7J20_500x500.jpg"
            title="Earl Grey"
            price="$26.20"
          />

          <div className={`${styles.arrivals_item} arrivals_5`}>
            <p className={`${styles.about_body} ${styles.about_link}`}>
              See More
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, y: 0 }}
        viewport={{ once: isAnimateInfinite }}
        className={`${styles.opticlear_wrapper} container`}
      >
        <div className={styles.opticlear_item}>
          <p className="main-title">
            <span style={{ fontSize: "0.75rem", verticalAlign: "top" }}>
              New
            </span>
            OptiClear Technology
          </p>
          <p className={`${styles.about_body} ${styles.opticlear_body}`}>
            We're proud to introduce OptiClear, a revolutionary lens technology
            that redefines precision and clarity. OptiClear utilizes advanced
            nano-particle manipulation to virtually eliminate any imperfections
            in the lens surface, resulting in unparalleled clarity and sharpness
            of vision. By harnessing the power of quantum computing. OptiClear
            ensures that evey lens is crafted with pinpoint accuracy, providing
            a vision experience that's second to none. Say goodbye to
            distortions and aberrations - with OptiClear, perfect vision is
            finally within reach.
          </p>
          <span className={styles.about_link}></span>
          <Link href={"/"} className={styles.about_link}>
            See More
          </Link>
        </div>
        <div className={styles.opticlear_item}>
          <div className={styles.opticlear_image}>
            <Image fill={true} src={"/sec_mov_b2.png"} />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: isAnimateInfinite }}
        className={`${styles.lenses_wrapper} container`}
      >
        <div className={styles.lenses_item}>
          <div className="main-title">Try Our Lenses</div>
          <div className={styles.about_body}>
            Discover how different lens options enhance your vision and
            complement your look. Experiment with colors, styles, and
            prescriptions to find your perfect match before making a purchase.
            It's time to see the world through lenses that reflect your unique
            personality and needs.
          </div>
          <div className={styles.about_link}>Try Now</div>
        </div>
        <div className={styles.lenses_item}>
          <div className={styles.lenses_circle}>
            <Image src={"/sec_mov_b1.png"} fill />
          </div>
          <div className={styles.lenses_circle}>
            <Image src={"/sec_mov_b1.png"} fill />
          </div>
          <div className={styles.lenses_circle}>
            <Image src={"/sec_mov_b1.png"} fill />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
