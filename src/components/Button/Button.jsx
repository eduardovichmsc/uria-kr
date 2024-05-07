import Link from "next/link";

export const ButtonLink = ({ title, href = "/", style, topSpace }) => {
  return (
    <Link
      href={href}
      className="section-link"
      style={{ ...style, marginTop: topSpace && "2.5rem" }}
    >
      {title}
    </Link>
  );
};
