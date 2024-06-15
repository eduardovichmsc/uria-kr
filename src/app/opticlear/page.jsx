"use client";
import styles from "./Opticlear.module.css";
import { ButtonLink } from "@/components/Button/ButtonLink";
import Review from "@/components/Review";
import { motion } from "framer-motion";

export default function Opticlear() {
  const isAnimateInfinite = true;
  return (
    <main className="main-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: isAnimateInfinite }}
        exit={{ opacity: 0 }}
        className={styles.banner_wrapper}
      >
        <div className={styles.banner_z1}>
          <div
            className={styles.banner_image}
            style={{ backgroundImage: "url(/main_L3.jpg)" }}
          ></div>
        </div>
        <div className={styles.banner_z2}>
          <p
            className={styles.banner_title}
            data-text="OptiClear And OptiCraft"
          >
            OptiClear And OptiCraft
          </p>
          <p className={styles.banner_body}>
            "Transforming The Way You See The World"
          </p>
          <ButtonLink
            href="/catalog"
            title={"Try Lenses"}
            style={{ position: "absolute", bottom: "-3vh" }}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: isAnimateInfinite }}
        className={`${styles.introduction_wrapper} container`}
      >
        <p className="main-title">Introduction</p>
        <div className={`${styles.introduction_inner} lh-normal`}>
          <div className={styles.introduction_item}>
            OptiClear, a revolutionary lens technology that redefines the
            standard for optical clarity and precision. Developed by our team of
            visionary engineers and scientists. OptiClear combines advanced
            materials science with culting-edge manufacturing techniques to
            deliver lenses of unparalleled quality. At the heart of OptiClear
            lies the OptiCraft Precision Engine, a state-of-the-art instrument
            created by our esteemed founder, Dr. Sunwoo Kim. Dr. Kim, a renowned
            pioneer in the field of optical engineering, envisioned a lens
            manufacturing process that would surpass conventional standards and
            set new benchmarks for clarity and precision.
          </div>
          <div className={styles.introduction_item}>
            With the OptiCraft Precision Engine, Dr. Kim's vision became a
            reality, as this groundbreaking instrument revolutionized the way
            lenses are crafted. The OptiCraft Precision Engine utilizes a
            combination of advanced laser optics and consistency. By harnessing
            the power of quantum computing, the OptiCarft Precision Engine
            analyzes and optimizes every aspect of the lens manufacturing
            process, ensuring that each lens produced is a masterpiece of
            optical engineering. With OptiClear lenses createdusing the
            OptiCraft Precision Engine, wearers can experience the world with
            unparalleled clarity and precision.
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: isAnimateInfinite }}
        className={`${styles.opticlear_wrapper} container`}
      >
        <div className={styles.opticlear_inner}>
          <div className={styles.opticlear_text}>
            <p className="main-title">OptiCraft Engine</p>
            <p className="lh-normal">
              We believe that precision is the cornerstone of exceptional
              eyewear. That's why we've developed the OptiCraft Precision Engine
              - a revolutionary instrument that sets new standards for lens
              manufacturing.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: isAnimateInfinite }}
        className={`${styles.reviews_wrapper} container`}
      >
        <p className="main-title">OptiClear Reviews</p>
        <div className={styles.reviews_inner}>
          <Review
            author="Kim Jiyeon"
            date="March 2024"
            body="Absolutely blow away by the clarity and precision of URIA's
              OptClear lenses! As someone who's always struggled with vision
              issues, these lenses have completely transformed my sight. The
              attention to details and craftsmanship behind OptiCraft is truly
              remarkable. Highly recommend for anyone looking for top-notch
              eyewear!"
          />
          <Review
            author="Jiwon Lee"
            date="February 2024"
            body="URIA's OptiClear lenses are truly amazing! I've always struggled with vision issues, but these lenses have completely changed my perspective. I'm impressed by the attention to detail and craftsmanship behind OptiCraft. Thanks to URIA's innovation! I recommend it to people who are struggling and can't find perfect ones, these ones are perfect!"
          />
          <Review
            author="Park Junho"
            date="January 2024"
            body="I've tried numerous lenses over the years, but nothing comes close to the clarity and comfort of URIA. The OptiCraft Precision Engine is a game-changer - you can really feel the ifference in quality. URIA's commitment to innovation shows through in every aspect of their technology. Couldn't be happier with my new lenses!"
          />
        </div>
        <div style={{ width: "100%", marginTop: "3rem" }}>
          <ButtonLink
            href="/catalog"
            title={"See More"}
            style={{ margin: "0 auto" }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: isAnimateInfinite }}
        className={`${styles.try_wrapper} container`}
      >
        <p className="main-title">Try OptiClear Now</p>
        <div className={styles.try_inner}>
          <div className={styles.try_item}>
            <div
              className={`${styles.try_item_image} bg-image`}
              style={{ backgroundImage: "url(main_L3.jpg)" }}
            ></div>
            <span className={styles.opticlear_icon}>OptiClear</span>
            <div className={styles.try_item_info}>
              <p className={styles.try_item_title}>EYEIS - Moral Grey</p>
              <p className={styles.try_item_price}>$26.90</p>
            </div>
          </div>
        </div>
        <ButtonLink
          href="/catalog"
          title="Catalog"
          style={{ margin: "0 auto" }}
          topSpace={true}
        />
      </motion.div>
    </main>
  );
}
