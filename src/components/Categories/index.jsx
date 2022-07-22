import React, { useState } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";

import "./categories.scss";

const categories = [
	{ id: 0, name: "Все" },
	{ id: 1, name: "Iphone 13" },
	{ id: 2, name: "Iphone 12" },
	{ id: 3, name: "Iphone 11" },
	{ id: 4, name: "Iphone XS" },
	{ id: 5, name: "Iphone X" },
];

const Categories = ({ model, setModel }) => {
	const dispatch = useDispatch();

	const onClickCategory = (id) => {
		dispatch(setModel(id));
	};

	return (
		<ul className="category__list">
			{categories.map((category) => (
				<li
					key={category.id}
					className={clsx("category__item", category.id === model ? "active" : "")}
					onClick={() => onClickCategory(category.id)}
				>
					{category.name}
				</li>
			))}
		</ul>
	);
};

export default Categories;
