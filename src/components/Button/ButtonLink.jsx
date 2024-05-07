import Link from "next/link";

export const ButtonLink = ({
  title,
  href = "/",
  style,
  topSpace,
  className,
}) => {
  return (
    <Link
      href={href}
      className={`section-link ${className && className}`}
      style={{ ...style, marginTop: topSpace && "2.5rem" }}
    >
      {title}
    </Link>
  );
};
