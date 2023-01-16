const Title = ({ title }) => {
	return <h1>{title}</h1>;
};
const Header = ({ title }) => {
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
				</ul>
			</nav>
			<div>Cart</div>
		</header>
	);
};

export default Header;
