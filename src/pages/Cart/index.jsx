import React, { useEffect, useState } from "react";
import styles from "./cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearItems } from "../../redux/cart/slice";

import { CartItem } from "../../components";
import { toUah } from "../../utils/numberFormat";

const Cart = () => {
	const { items, totalPrice } = useSelector((state) => state.cart);
	const dispacth = useDispatch();

	const navigate = useNavigate();

	const totalCount = items.reduce((sum, item) => sum + item.count, 0);

	if (items.length === 0) {
		return (
			<div className={styles.clearCart}>
				<h1>Корзина пустая :(</h1>
			</div>
		);
	}

	// useEffect(() => {
	// 	dispacth(fetchIphonesForCart());
	// }, []);

	const onCLickClearCart = () => {
		if (window.confirm("Clear cart?")) {
			dispacth(clearItems());
		}
	};

	return (
		<div className={styles.cartContainer}>
			<div className={styles.wrapperHeader}>
				<h3>Корзина</h3>

				<div className={styles.clear}>
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.5 5H4.16667H17.5"
							stroke="#B6B6B6"
							strokeWidth="1.2"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
						<path
							d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
							stroke="#B6B6B6"
							strokeWidth="1.2"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
						<path
							d="M8.33337 9.16667V14.1667"
							stroke="#B6B6B6"
							strokeWidth="1.2"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
						<path
							d="M11.6666 9.16667V14.1667"
							stroke="#B6B6B6"
							strokeWidth="1.2"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
					<span onClick={onCLickClearCart}>Очистить корзину</span>
				</div>
			</div>
			<div className={styles.wrapper}>
				{items.map((item) => (
					<CartItem key={item.id} {...item} />
				))}
			</div>

			<div className={styles.wrapperFooter}>
				<div>
					<div>
						<span>
							Всего:<b>{totalCount}</b>
						</span>
					</div>
					<div>
						<Link to="/">
							<button className={styles.goBack}>Вернуться назад</button>
						</Link>
					</div>
				</div>

				<div>
					<div>
						<span>
							Сумма заказа:<b className={styles.sum}>{toUah.format(totalPrice)}</b>
						</span>
					</div>

					<div>
						<button className={styles.buy}>Оплатить</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
