"use client";
import CatalogItem from "@/components/CatalogItem";
import "./catalog.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Catalog() {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);
  const [pages, setPages] = useState(1);
  const [limit, setLimit] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (page) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}products?_limit=${limit}&_offset=${
          limit * (page - 1)
        }`
      );
      console.log(res);
      setPages(res.data._totalPages);
      setLimit(res.data._limit);
      if (page > 1) {
        setData((prev) => [...prev, ...res.data.products]);
        return;
      }
      setData(res.data.products);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, []);

  if (isLoading) {
    return <div className="container main-wrapper">Матье бал</div>;
  }

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
                image={item.photos && item.photos[0]}
                title={item.title}
                price={item.price}
              />
            ))}
        </div>
        <button
          className="catalog_more"
          onClick={() => {
            const nextPage = currentPage + 1;
            setCurrentPage((prev) => prev + 1);
            fetchData(nextPage);
          }}
          disabled={currentPage >= pages}
        >
          MORE
        </button>
      </div>
    </main>
  );
}
