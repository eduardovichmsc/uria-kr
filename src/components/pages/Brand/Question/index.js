"use client";
import { useState } from "react";

const Question = ({ title, body, isActive }) => {
  const [plus, setPlus] = useState(isActive);

  return (
    <div className="q_item active">
      <span className="q_top" onClick={() => setPlus(!plus)}>
        <p className="q_title">{title}</p>
        <div className={`plus ${plus && "active"}`}></div>
      </span>
      <p className={`q_body ${plus && "active"}`}>{body}</p>
    </div>
  );
};

export default Question;
