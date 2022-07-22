import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

import "./fullProduct.scss";
import Loading from "../../components/Loading";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/slice";
import { toUah } from "../../utils/numberFormat";

const FullProduct = () => {
	const [item, setItem] = useState(null);
	const [memorySelect, setMemorySelect] = useState(null);

	const disapcth = useDispatch();

	const ref = useRef(false);

	const { id } = useParams();

	useEffect(() => {
		try {
			async function getItem() {
				const { data } = await axios.get(
					`https://62b33b53a36f3a973d1e61db.mockapi.io/iphone/${id}`
				);
				setItem(data);
				setMemorySelect(data.memories.find((memory) => memory.memory === data.memory).id);
			}
			getItem();
		} catch (e) {
			console.log("Error", e);
		}
	}, [id]);

	useEffect(() => {
		if (ref.current) {
			try {
				const currentMemory = item?.memories[memorySelect].memory;

				async function getItem() {
					const { data } = await axios.get(
						`https://62b33b53a36f3a973d1e61db.mockapi.io/iphone?memory=${currentMemory}`
					);
					setItem(
						data.find((currItem) => currItem.color === item.color && currItem.img === item.img)
					);
				}
				getItem();
			} catch (e) {
				console.log("Error: ", e);
			}
		}
	}, [memorySelect]);

	const onClickMemory = (id) => {
		setMemorySelect(id);
		ref.current = true;
	};

	const addToCart = () => {
		const { id, name, price, img, memory } = item;
		disapcth(addItem({ id, name, price, img, memory }));
	};

	if (!item) {
		return (
			<div className="fullProduct__container">
				<Loading type={"spinningBubbles"} color={"#aaaaaa"} />
			</div>
		);
	}

	return (
		<>
			<div className="fullProduct__wrapper">
				<img src={item?.img} alt={item?.name} />
				<div className="fullProduct__infoBlock">
					<h2>{`${item?.name} ${item?.memory}GB (${item?.color})`}</h2>
					<span>{toUah.format(item?.price)}</span>
					<h3>Объем памяти:</h3>
					<ul>
						{item?.memories.map((item) => {
							return (
								<li
									key={item.id}
									className={item.id === memorySelect ? "active" : ""}
									onClick={() => onClickMemory(item.id)}
								>
									{item.memory}GB
								</li>
							);
						})}
					</ul>
					<div className="btn-block">
						<button onClick={addToCart}>Купить</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default FullProduct;
