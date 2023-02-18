import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

const WatchPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	}, []);

	let [params] = useSearchParams();
	const id = params.get("v");
	return (
		<div className="mt-6 ml-6">
			<iframe
				title="Video"
				id="ytplayer"
				type="text/html"
				width="1200"
				height="600"
				src={`https://www.youtube.com/embed/${id}?autoplay=1`}
				allowFullScreen
				frameBorder="0"
			/>
		</div>
	);
};

export default WatchPage;
