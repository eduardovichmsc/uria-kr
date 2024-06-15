"use client";
import CatalogItem from "@/components/CatalogItem";
import "./catalog.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Catalog() {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const [limit, setLimit] = useState(0);

  const fetchData = async (page = 1) => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL +
          "products?_offset=" +
          limit * (page - 1)
      );
      setPages(res.data._totalPages);
      setLimit(res.data._limit);
      setData(res.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="container main-wrapper">
      <div className="catalog">
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="main-title">Catalog</p>
          <p className="">Filters</p>
        </span>
        <div className="catalog_filters">
          <select name="" id="" value="default" className="filter_select">
            <option value="default" disabled>
              Color
            </option>
          </select>

          <select name="" id="" value="default" className="filter_select">
            <option value="default" disabled>
              Material
            </option>
          </select>

          <select name="" id="" value="default" className="filter_select">
            <option value="default" disabled>
              Tint
            </option>
          </select>
        </div>
        <div className="catalog_grid">
          {data.length > 0 &&
            data.map((item, index) => (
              <CatalogItem
                key={index}
                id={item.id}
                image={item.photos && item.photos.at(0)}
                title={item.title}
                price={item.price}
              />
            ))}
        </div>
        <p>{pages}</p>
      </div>
    </main>
  );
}
