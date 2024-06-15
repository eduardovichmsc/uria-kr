import "./review.css";

const Review = ({ author, date, body }) => {
  return (
    <div className="reviews_item lh-normal">
      <span className="reviews_inline">
        <p className="reviews_author">{author}</p>
        <p className="reviews_date">{date}</p>
      </span>
      <p className="reviews_body">{body}</p>
    </div>
  );
};

export default Review;
