import React, { useState, useContext } from "react";
import Menu from "./Menu";
import MyOrder from "../containers/MyOrder";
import logoYard from "@logos/logo_yard_sale.svg";
import iconMenu from "@icons/icon_menu.svg";
import iconShoppingCart from "@icons/icon_shopping_cart.svg";
import AppContext from "../context/AppContext";
import "@styles/Header.scss";

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const {
		state: { cart },
	} = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	};
	return (
		<nav>
			<img src={iconMenu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logoYard} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						israelrojas@example.com
					</li>
					<li
						className="navbar-shopping-cart"
						onClick={() => setToggleOrders(!toggleOrders)}
					>
						<img src={iconShoppingCart} alt="shopping cart" />
						{cart.length > 0 ? <div>{cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />} {/* si toggle es verdadero muestra el menu */}
			{toggleOrders && <MyOrder />}
		</nav>
	);
};

export default Header;
