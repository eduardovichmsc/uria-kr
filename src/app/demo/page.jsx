import Link from "next/link";
import "./page.css";

const Demo = () => {
  return (
    <div className="main-wrapper">
      <div className="navigation_menu">
        <Link href={"/"} className="navigation_link">
          Home
        </Link>
        <Link href={"/"} className="navigation_link">
          Brand
        </Link>
        <Link href={"/catalog"} className="navigation_link">
          Catalog
        </Link>
        <Link href={"/"} className="navigation_link">
          Opticlear
        </Link>
      </div>
    </div>
  );
};
export default Demo;
