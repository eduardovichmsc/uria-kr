import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import styles from "@/app/Page.module.css";
import "./ArrivalItem.css";

const ArrivalItem = ({
  url,
  grid_order,
  image,
  title,
  price,
  isAnimateOnce = true,
}) => {
  console.log(grid_order);
  return (
    <Link href={`/${url}`} className={`arrivals_item ${grid_order}`}>
      {image && (
        <motion.div
          initial={{ height: "60%" }}
          whileInView={{ opacity: 1, height: "100%" }}
          viewport={{ once: isAnimateOnce }}
          transition={{ duration: 0.8 }}
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
        transition={{ duration: 0.8, delay: 1 }}
        className="arrivals_body"
      >
        <p className="about_body">{title}</p>
        {price && <p className={`about_body arrivals_price`}>{price}</p>}
      </motion.span>
    </Link>
  );
};

export default ArrivalItem;
