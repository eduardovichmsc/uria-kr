import Link from "next/link";
import styles from "@/app/Page.module.css";

const MainPageItem = ({ id, title, link = "/" }) => {
  return (
    <div
      className={`secondary-text ${styles.products_item} ${styles.products_id}`}
    >
      <p className={styles.products_secondary}>{id}</p>
      <p className={styles.products_body}>{title}</p>
      <Link href={link} className={styles.products_secondary}>
        go
      </Link>
    </div>
  );
};

export default MainPageItem;
