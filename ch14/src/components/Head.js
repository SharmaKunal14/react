import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const dispatch = useDispatch();
	const searchCache = useSelector((store) => store.search);
	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchCache[searchQuery]) {
				setSuggestions(searchCache[searchQuery]);
			} else {
				getSearchSuggestions(searchQuery);
			}
		}, 200);

		return () => clearTimeout(timer);
	}, [searchQuery]);
	const handleToggleEvent = () => {
		dispatch(toggleMenu());
	};
	const getSearchSuggestions = async (searchQuery) => {
		const suggestions = await fetch(
			YOUTUBE_SEARCH_SUGGESTIONS + searchQuery
		);
		const [query, resp] = await suggestions.json();
		setSuggestions(resp);
		dispatch(cacheResults({ [searchQuery]: resp }));
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
			<div className="col-span-10 px-10 text-center relative">
				<input
					type="text"
					className="border border-gray-500 rounded-l-full w-1/2 px-4 py-2"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					onFocus={() => setShowSuggestions(true)}
					onBlur={() => setShowSuggestions(false)}
				/>
				<button className="btn p-2 border border-gray-500 bg-gray-200 rounded-r-full">
					🔍
				</button>
				{showSuggestions && (
					<div className="absolute bg-white translate-x-[20rem] translate-y-[0.1rem] shadow-lg px-2 py-2 rounded-lg z-10">
						<ul>
							{suggestions.map((suggestion) => (
								<li
									className="w-[41rem] text-left p-2 hover:bg-gray-100"
									key={suggestion}
								>
									🔍 {suggestion}
								</li>
							))}
						</ul>
					</div>
				)}
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
