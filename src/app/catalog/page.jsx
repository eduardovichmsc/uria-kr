import styles from "../page.css";
export default function Catalog() {
  return (
    <main className="container">
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p className="main-title"> Catalog </p>
        <p className=""> Filters </p>
      </span>
      <div className="catalog_grid"></div>
    </main>
  );
}
