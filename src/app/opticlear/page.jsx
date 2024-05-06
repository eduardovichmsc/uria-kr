import Link from "next/link";
import styles from "./Opticlear.module.css";
export default function Opticlear() {
  return (
    <main className="main-wrapper">
      <div className={styles.banner_wrapper}>
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
          <Link
            href={"/catalog/id"}
            className="section-link"
            style={{ position: "absolute", bottom: "-2rem" }}
          >
            Try Lenses
          </Link>
        </div>
      </div>
      <div className={`${styles.introduction_wrapper} container`}>
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
      </div>
      <div className={`${styles.opticlear_wrapper} container`}>
        <p className="main-title">OptiClear</p>
        <div className={styles.opticlear_inner}>
          <div className={styles.opticlear_image_1}></div>
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
      </div>

      <div className={`${styles.reviews_wrapper} container`}>
        <p className="main-title">OptiClear Reviews</p>
        <div className={styles.reviews_inner}>
          <div className={`${styles.reviews_item} lh-normal`}>
            <span className={styles.reviews_inline}>
              <p className={styles.reviews_author}>Kim Jiyeon</p>
              <p className={styles.reviews_date}>March 2024</p>
            </span>
            <p className={styles.reviews_body}>
              Absolutely blow away by the clarity and precision of URIA's
              OptClear lenses! As someone who's always struggled with vision
              issues, these lenses have completely transformed my sight. The
              attention to details and craftsmanship behind OptiCraft is truly
              remarkable. Highly recommend for anyone looking for top-notch
              eyewear!
            </p>
          </div>

          <div className={`${styles.reviews_item} lh-normal`}>
            <span className={styles.reviews_inline}>
              <p className={styles.reviews_author}>Kim Jiyeon</p>
              <p className={styles.reviews_date}>March 2024</p>
            </span>
            <p className={styles.reviews_body}>
              Absolutely blow away by the clarity and precision of URIA's
              OptClear lenses! As someone who's always struggled with vision
              issues, these lenses have completely transformed my sight. The
              attention to details and craftsmanship behind OptiCraft is truly
              remarkable. Highly recommend for anyone looking for top-notch
              eyewear!
            </p>
          </div>

          <div className={`${styles.reviews_item} lh-normal`}>
            <span className={styles.reviews_inline}>
              <p className={styles.reviews_author}>Kim Jiyeon</p>
              <p className={styles.reviews_date}>March 2024</p>
            </span>
            <p className={styles.reviews_body}>
              Absolutely blow away by the clarity and precision of URIA's
              OptClear lenses! As someone who's always struggled with vision
              issues, these lenses have completely transformed my sight. The
              attention to details and craftsmanship behind OptiCraft is truly
              remarkable. Highly recommend for anyone looking for top-notch
              eyewear!
            </p>
          </div>
        </div>
        <div style={{ width: "100%", marginTop: "1rem" }}>
          <Link
            href={"/brand"}
            className="section-link"
            style={{ margin: "0 auto" }}
          >
            See More
          </Link>
        </div>
      </div>

      <div className={`${styles.try_wrapper} container`}>
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
      </div>
    </main>
  );
}
