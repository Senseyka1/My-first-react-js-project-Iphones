import axios from "axios";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, IphoneBlock, Pagination, Sort, Skeleton, Accordion } from "../../components";
import { setPage, setModelId, setSort } from "../../redux/filter/slice";
import {
	fetchIphoneByColor,
	fetchIphoneByMemory,
	fetchIphones,
	properties,
} from "../../redux/iphones/slice";

import styles from "./home.module.scss";

const arrayMemory = [
	{ id: 0, memory: 64 },
	{ id: 1, memory: 128 },
	{ id: 2, memory: 256 },
	{ id: 3, memory: 512 },
];
const arrayColors = [
	{ id: 0, color: "red" },
	{ id: 1, color: "blue" },
	{ id: 2, color: "midnight" },
	{ id: 3, color: "green" },
];

const Home = () => {
	const [memoryId, setMemoryId] = useState(null);
	const [colorId, setColorId] = useState(null);

	const { search, page, modelId, sort } = useSelector((state) => state.filter);
	const { items, status } = useSelector((state) => state.iphones);
	const dispatch = useDispatch();

	useEffect(() => {
		const model = modelId > 0 ? `&model=${modelId}` : "";
		const limit = modelId === 0 ? "8" : "4";
		const searchValue = search ? `&search=${search}` : "";

		dispatch(fetchIphones({ sort, page, searchValue, model, limit }));
	}, [modelId, sort, page, search]);

	const onClickPage = (page) => {
		dispatch(setPage(page));
	};

	const onClickMemory = (memory, id) => {
		setMemoryId(id);
		dispatch(fetchIphoneByMemory({ memory }));
	};

	const onClickColor = (color, id) => {
		setColorId(id);
		dispatch(fetchIphoneByColor({ color }));
	};

	const iphones = items && items.map((product, index) => <IphoneBlock {...product} key={index} />);
	const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

	return (
		<>
			<div className={styles.wrapperCategories}>
				<Categories model={modelId} setModel={setModelId} />
				<Sort sort={sort} setSort={setSort} />
			</div>

			<h2>Все айфоны</h2>

			<div className={styles.content}>
				<div>
					<Accordion
						title="Колер"
						content={
							<ul className="accordion__list">
								{arrayColors.map((item) => {
									return (
										<li
											key={item.id}
											className={clsx("accordion__item", {
												active: item.id === colorId,
											})}
											onClick={() => onClickColor(item.color, item.id)}
										>
											{item.color}
										</li>
									);
								})}
							</ul>
						}
					/>
					<Accordion
						title="Память"
						content={
							<ul className="accordion__list">
								{arrayMemory.map((item) => {
									return (
										<li
											key={item.id}
											className={clsx("accordion__item", {
												active: item.id === memoryId,
											})}
											onClick={() => onClickMemory(item.memory, item.id)}
										>
											{item.memory}GB
										</li>
									);
								})}
							</ul>
						}
					/>
				</div>

				<div className={styles.products}>{status === properties.LOADING ? skeletons : iphones}</div>
			</div>

			<Pagination onClickPage={onClickPage} page={page} />
		</>
	);
};

export default Home;
