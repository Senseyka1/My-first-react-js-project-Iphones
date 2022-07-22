import React from "react";
import "./pagination.scss";

const pages = [1, 2, 3, 4, 5];

const Pagination = ({ onClickPage, page }) => {
  return (
    <ul className="page__list">
      {pages.map((p, index) => (
        <button key={index} onClick={() => onClickPage(p)} className={p === page ? "active" : ""}>
          {p}
        </button>
      ))}
    </ul>
  );
};

export default Pagination;
