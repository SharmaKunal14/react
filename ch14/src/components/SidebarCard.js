import React from "react";

const SidebarCard = ({ title, list }) => {
	let marginTop = "";
	if (title) {
		marginTop = "mt-3";
	}
	return (
		<div>
			<h1 className={`font-bold ${marginTop}`}>{title}</h1>
			{list.map((l, index) => (
				<h4 key={index}>{l}</h4>
			))}
		</div>
	);
};

export default SidebarCard;
