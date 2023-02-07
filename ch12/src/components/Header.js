import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Title = ({ title }) => {
	return <h1>{title}</h1>;
};
const Header = ({ title }) => {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const cartItems = useSelector((store) => store.cart.items);
	return (
		<header className="header">
			<div className="img__container">
				<img
					src={require("../../logo.jpg")}
					alt="Food logo"
					className="logo"
				/>
				<Title title={title} />
			</div>
			<nav>
				<ul className="nav__list">
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/about">
						<li>About</li>
					</Link>
					<Link to="/cart">
						<li>Cart - {cartItems.length}</li>
					</Link>
					<Link to="/foodstamart">
						<li>Foodstamart</li>
					</Link>
				</ul>
			</nav>
			<div>
				{isLoggedIn ? (
					<Link to="/">
						<button
							onClick={() => setLoggedIn(false)}
							className="btn"
						>
							Logout
						</button>
					</Link>
				) : (
					<Link to="/login">
						<button
							onClick={() => setLoggedIn(true)}
							className="btn"
						>
							Login
						</button>
					</Link>
				)}
			</div>
		</header>
	);
};

export default Header;
