import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
				<h1>Home</h1>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				{"   "}
			</header>
		);
	}
}
export default Home;
