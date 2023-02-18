import React from "react";

const Button = ({ name }) => {
	return (
		<div>
			<button className="bg-gray-200 p-3 rounded-md flex hover:bg-black hover:text-white">
				{name}
			</button>
		</div>
	);
};

export default Button;
