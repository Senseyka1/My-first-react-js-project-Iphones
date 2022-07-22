import React, { useState } from "react";
import clsx from "clsx";

import "./sort.scss";
import { useDispatch } from "react-redux";

const sortList = [
	{ id: 0, name: "цена по убыванию", sortBy: "price", order: "desc" },
	{ id: 1, name: "цена по возрастанию", sortBy: "price", order: "asc" },
];

const Sort = ({ sort, setSort }) => {
	const [visiblePopup, setVisiblePopup] = useState(false);
	const dispatch = useDispatch();

	const onClickSort = (obj) => {
		dispatch(setSort(obj));
		setVisiblePopup(false);
	};

	return (
		<div className="sort__popup">
			<svg
				className={visiblePopup === true ? "active" : ""}
				width="11"
				height="11"
				viewBox="0 0 8 5"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M3.64645 4.85355C3.84171 5.04882 4.15829 5.04882 4.35355 4.85355L7.53553 1.67157C7.7308 1.47631 7.7308 1.15973 7.53553 0.964466C7.34027 0.769204 7.02369 0.769204 6.82843 0.964466L4 3.79289L1.17157 0.964466C0.976311 0.769204 0.659728 0.769204 0.464466 0.964466C0.269204 1.15973 0.269204 1.47631 0.464466 1.67157L3.64645 4.85355ZM3.5 4V4.5H4.5V4H3.5Z"
					fill="black"
				></path>
			</svg>

			<h3 className="sort__title">Сортировка по:</h3>

			<span className="sort__text" onClick={() => setVisiblePopup(!visiblePopup)}>
				{sortList[sort.id].name}
			</span>

			{visiblePopup && (
				<ul className="sort__list">
					{sortList.map((obj, index) => (
						<li
							key={obj.id}
							onClick={() => onClickSort(obj)}
							className={clsx("sort__item", obj.id === sort.id ? "active" : "")}
						>
							{obj.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Sort;
