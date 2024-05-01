"use client";

import Image from "next/image";
import styles from "./page.css";
import Link from "next/link";
import MainPageItem from "@/components/main/ProductItem";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const ArrivalItem = ({
  url,
  grid_order,
  image,
  title,
  price,
  isAnimateOnce = true,
}) => {
  return (
    <Link href={`/${url}`} className={`arrivals_item ${grid_order}`}>
      {image && (
        <motion.div
          initial={{ opacity: 0, x: -100, width: "60%" }}
          whileInView={{ opacity: 1, x: 0, width: "100%" }}
          viewport={{ once: isAnimateOnce }}
          transition={{ duration: 1 }}
          className="arrivals_image_wrapper"
        >
          <Image
            width={700}
            height={700}
            src={image}
            className="arrivals_image"
          />
        </motion.div>
      )}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="arrivals_body"
      >
        <p className="about_body">{title}</p>
        {price && <p className="about_body arrivals_price">{price}</p>}
      </motion.span>
    </Link>
  );
};

export default function Home() {
  const isAnimateInfinite = true;

  return (
    <main className="">
      <div className="flex banner_wrapper">
        <div className="banner_item">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, height: "max-content" }}
              transition={{ duration: 0.3 }}
              className="banner_text"
            >
              See Beyond Beauty:
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, height: "max-content" }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="banner_text"
            >
              Experience Vision
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, height: "max-content" }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="banner_text"
            >
              Like Never Before
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="banner_link"
          >
            <Link href={"/"} className="">
              New Arrivals
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: isAnimateInfinite }}
          className="banner_item"
        >
          <Image
            src={"/main-L1.jpg"}
            width={785}
            height={600}
            className="banner_image"
            alt="main_L1"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, y: 0 }}
        viewport={{ once: isAnimateInfinite }}
        className="products_wrapper container"
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
        className="about_wrapper container"
      >
        <div className="about_item about_image">
          <Image fill={true} src={"/main_mov_bg.jpg"} alt="main_mov_bg" />
        </div>
        <div className="about_item">
          <p className="about_title">Brand Idea</p>
          <p className="about_body">
            In Korea, URIA is leading the way in lens innovation, blending
            timeless elegance with modern flair. Crafted with care and
            innovative design, our lenses redefine cool. At URIA, we're inviting
            you to see the world through lenses that scream quality and style.
            Our dedication to quality craftmanship and thinking outside the box
            sets us apart. So, welcome to URIA, where Korean spirit meets a
            fresh vision. It's a whole new view for your eyes.
          </p>
          <Link href={"/"} className="about_link">
            Read More
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, y: 0 }}
        viewport={{ once: isAnimateInfinite }}
        className="opticlear_wrapper container"
      >
        <div className="opticlear_item">
          <p className="about_title">
            <span style={{ fontSize: "0.75rem", verticalAlign: "top" }}>
              New
            </span>
            OptiClear Technology
          </p>
          <p className="about_body opticlear_body">
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
          <span className="about_link"></span>
          <Link href={"/"} className="about_link">
            See More
          </Link>
        </div>
        <div className="opticlear_item">
          <div className="opticlear_image">
            <Image fill={true} src={"/sec_mov_b2.png"} />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, y: 0 }}
        viewport={{ once: isAnimateInfinite }}
        className="arrivals_wrapper container"
      >
        <p className="about_title">New Arrivals</p>
        <div className="arrivals_grid">
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

          <div className="arrivals_item arrivals_5">
            <p className="about_body about_link">See More</p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
