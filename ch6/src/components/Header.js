import { useState } from "react";
const Title = ({ title }) => {
	return <h1>{title}</h1>;
};
const Header = ({ title }) => {
	const [isLoggedIn, setLoggedIn] = useState(false);
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
					<li>Home</li>
					<li>About</li>
					<li>Account</li>
					<li>Cart</li>
				</ul>
			</nav>
			<div>
				{isLoggedIn ? (
					<button onClick={() => setLoggedIn(false)} className="btn">
						Logout
					</button>
				) : (
					<button onClick={() => setLoggedIn(true)} className="btn">
						Login
					</button>
				)}
			</div>
		</header>
	);
};

export default Header;
