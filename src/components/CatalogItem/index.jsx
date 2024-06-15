"use client";
import { useRouter } from "next/navigation";

const CatalogItem = ({
  id = 0,
  image,
  title = "Add title",
  price = parseFloat(40.2).toFixed(2),
}) => {
  const router = useRouter();

  const redirectToItem = (id) => {
    router.push("/catalog/" + id);
  };

  return (
    <>
      <div className="catalog_item" onClick={() => redirectToItem(id)}>
        <div
          className="catalog_item_image bg-image"
          style={{ backgroundImage: `url(${image && image})` }}
        ></div>
        <div className="catalog_item_info">
          <p className="catalog_item_title">{title}</p>
          <p className="catalog_item_price">$ {price}</p>
        </div>
      </div>
    </>
  );
};
export default CatalogItem;
