import axios from "axios";
import clsx from "clsx";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../../redux/cart/slice";
import { toUah } from "../../utils/numberFormat";
import imgSuccessful from "../../assets/img/checked.png";

import "./iphoneBlock.scss";

const IphoneBlock = ({ id, name, price, img, memory, color }) => {
	const { items } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const [isShown, setIsShown] = useState(false);
	const [disable, setDisable] = useState(items.find((item) => item.id === id));

	const onAddItem = async () => {
		const obj = { id, name, price, img, memory };
		// try {
		// 	await axios.post("https://62b33b53a36f3a973d1e61db.mockapi.io/cart", {
		// 		name,
		// 		price,
		// 		img,
		// 		memory,
		// 		count: 1,
		// 	});
		// } catch (e) {
		// 	console.log(e);
		// }

		dispatch(addItem(obj));
		setDisable(true);
	};

	return (
		<div
			className={clsx("mainIphoneBlock", {
				active: isShown,
			})}
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}
		>
			<div
				className={clsx("wrapperIphoneBlock", {
					active: isShown,
				})}
			>
				<Link to={`/product/${id}`}>
					<img src={img} alt={name} />
					<h3>{`${name} ${memory}GB (${color})`}</h3>
				</Link>
				<div className="wrapperIphoneBlock__line"></div>
				<span>{toUah.format(price)}</span>
			</div>
			{isShown && (
				<div
					className={clsx("wrapperIphoneBlock__buy", {
						active: isShown,
					})}
				>
					{disable ? (
						<span className="wrapper__success">
							<img className="img__successful" src={imgSuccessful} alt="successful" />
						</span>
					) : (
						<button disabled={disable === true} onClick={onAddItem}>
							Купить
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default IphoneBlock;
