import React from "react";
import styles from "./header.module.scss";

import CartImg from "./../../assets/img/Cart-Img.svg";
import { Link, useLocation } from "react-router-dom";
import Search from "../Search";
import { useSelector } from "react-redux";
import { toUah } from "../../utils/numberFormat";

const Header = () => {
	const location = useLocation();

	const { totalPrice } = useSelector((state) => state.cart);

	return (
		<div className={styles.line}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<Link to="/">
						<h1>React Iphone</h1>
					</Link>
					<div className={styles.cartInfo}>
						{location.pathname === "/" && <Search />}

						{location.pathname !== "/cart" && (
							<>
								<Link to="/cart">
									<img src={CartImg} alt="cart" />
								</Link>
								<span>{toUah.format(totalPrice)}</span>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
