"use client";

import { useEffect, useState } from "react";
import "./productpage.css";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function productPage() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [productCount, setProductCount] = useState(1);
  const [countError, setCountError] = useState("");

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "products/" + id
      );
      setData(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCount = (value) => {
    setCountError("");
    if (value === -1 && productCount <= 1) {
      setCountError("Count can not be less than 1");
      return;
    }
    if (value == parseInt("+1") && productCount >= 10) {
      setCountError("You cannot order more than 10");
      return;
    }
    setProductCount((prev) => prev + value);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (isLoading) {
    return <div> МатьЕ бал</div>;
  }
  return (
    <div className="container main-wrapper">
      <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
        <div className="breadcrumb">
          <Link href={"/"} className="breadcrumb_item">
            Home
          </Link>
          <Link href={"/catalog"} className="breadcrumb_item">
            Catalog
          </Link>
          <Link href={"/catalog/" + data.id} className="breadcrumb_item">
            {data.title}
          </Link>
        </div>
        <div className="product_wrapper">
          <div className="product_images">
            <div
              className="first_image bg-image"
              style={{
                backgroundImage: `url('${
                  data.photos.at(1) || "/sec_mov_b1.jpg"
                }')`,
              }}
            ></div>
            <div
              className="second_image bg-image"
              style={{
                backgroundImage: `url('${
                  data.photos.at(0) || "/sec_mov_b1.jpg"
                }')`,
              }}
            ></div>
            {data.photos.at(2) && (
              <div
                className="third_image bg-image"
                style={{
                  backgroundImage: `url('${
                    data.photos.at(2) || "/sec_mov_b1.jpg"
                  }')`,
                }}
              ></div>
            )}
          </div>
          <div className="product_info">
            <p className="product_title">{data.title}</p>
            <p className="product_price">$ {data.price}</p>
            <p className="product_body">
              {data.description ||
                `EYEIS - Amber Glow lenses emanate warmth and sophistication, casting
            a soft golden hue that adds a toch of elegance to your gaze.
            Experience the allure of amber hues, enhancing both style and
            clarity with every wear.`}
            </p>

            <p className="product_key">Description</p>
            <p className="product_value">OptiClear / Water: 43% / 1 Month</p>

            <p className="product_key">Material</p>
            <p className="product_value">{data.material || `Polycarbonate`}</p>

            <p className="product_key">Power *</p>
            <div className="product_value">
              <select name="left_eye" id="" className="product_eye_select">
                <option value="default">Left Eye</option>
              </select>
              <select name="right_eye" id="" className="product_eye_select">
                <option value="default">Right Eye</option>
              </select>
            </div>

            <div className="product_count">
              <button
                className="product_count_btn"
                onClick={() => handleCount(-1)}
                disabled={productCount <= 1 && true}
              >
                -
              </button>
              <p className="product_count_number">{productCount}</p>
              <button
                className=""
                onClick={() => handleCount(+1)}
                disabled={productCount >= 10 && true}
              >
                +
              </button>
            </div>

            <button className="product_add">Add To Cart</button>

            {countError.length !== 0 && (
              <p className="product_count_error">{countError}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
