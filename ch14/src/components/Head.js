import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
	const dispatch = useDispatch();
	const handleToggleEvent = () => {
		dispatch(toggleMenu());
	};
	return (
		<div className="grid grid-flow-col p-5 shadow-lg">
			<div className="flex col-span-1">
				<img
					alt="logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
					className="h-8 mr-2 cursor-pointer"
					onClick={handleToggleEvent}
				/>
				<a href="/">
					<img
						alt="youtube-logo"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
						className="h-8"
					/>
				</a>
			</div>
			<div className="col-span-10 px-10 text-center">
				<input
					type="text"
					className="border border-gray-500 rounded-l-full w-1/2 px-4 py-2"
				/>
				<button className="btn p-2 border border-gray-500 bg-gray-200 rounded-r-full">
					🔍
				</button>
			</div>
			<div className="col-span-1">
				<img
					src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
					alt="user-logo"
					className="h-8"
				/>
			</div>
		</div>
	);
};

export default Head;
