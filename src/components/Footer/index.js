import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer_inner} container`}>
        <Link href={"/"} className={styles.logo}>
          URIA
        </Link>
        <div className={styles.social}>
          <Link href={"/"} className={styles.social_item}>
            <img src={"/instagram.svg"} className={styles.social_svg} />
          </Link>
          <Link href={"/"} className={styles.social_item}>
            <img
              src={"/tiktok.svg"}
              className={`${styles.social_svg} ${styles.tiktok}`}
            />
          </Link>
          <Link href={"/"} className={styles.social_item}>
            <img src={"/youtube.svg"} className={styles.social_svg} />
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href={"/"}>Home</Link>
          <Link href={"/catalog"}>Catalog</Link>
          <Link href={"/opticlear"}>OptiClear</Link>
          <Link href={"/brand"}>Brand</Link>
        </nav>
        <a href="mailto:business@uria.co.kr" className={styles.copyright}>
          business@uria.co.kr
        </a>
      </div>
    </footer>
  );
};

export default Footer;
