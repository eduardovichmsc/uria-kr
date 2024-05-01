import Link from "next/link";

const MainPageItem = ({ id, title, link = "/" }) => {
  return (
    <div className="products_item secondary-text products_id">
      <p className="products_secondary">{id}</p>
      <p className="products_body">{title}</p>
      <Link href={link} className="products_secondary">
        go
      </Link>
    </div>
  );
};

export default MainPageItem;
