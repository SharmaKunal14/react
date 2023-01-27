import React, { Component } from "react";

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1,
		};
	}
	componentDidMount() {
		this.timer = setInterval(() => {
			console.log("hi");
		}, 3000);
	}
	componentDidUpdate() {
		console.log("Update");
	}
	componentWillUnmount() {
		console.log("unmount");
		clearInterval(this.timer);
	}

	render() {
		return (
			<h3>
				About
				<button
					onClick={() => {
						this.setState({ count: 2 });
					}}
				>
					{" "}
					Update
				</button>
			</h3>
		);
	}
}
export default About;
