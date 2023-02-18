import React from "react";
import Button from "./Button";

const list = [
	"All",
	"Music",
	"Sports",
	"Valentines",
	"Punjabi Music",
	"Cricket",
	"India",
	"S Jaishankar",
	"Bhangra",
	"Satindar Sartaaj",
	"Jhajhar",
	"Panjab University",
	"Dance",
	"Hip Hop",
	"Hindi Songs",
];
const ButtonList = () => {
	return (
		<div className="flex px-3 py-4 gap-6 overflow-x-auto">
			{list.map((item, index) => (
				<Button name={item} key={index} />
			))}
		</div>
	);
};

export default ButtonList;
