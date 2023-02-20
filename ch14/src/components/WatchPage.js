import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentList from "./CommentList";

const comments = [
	{
		name: "Kunal Sharma",
		text: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet",
		replies: [
			{
				name: "Kunal Sharma",
				text: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet",
				replies: [
					{
						name: "Kunal Sharma",
						text: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet",
						replies: [
							{
								name: "Kunal Sharma",
								text: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet",
							},
						],
					},
					{
						name: "Kunal Sharma",
						text: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet",
					},
				],
			},
			{
				name: "Kunal Sharma",
				text: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet",
			},
		],
	},

	{
		name: "Kunal Sharma",
		text: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet",
		replies: [
			{
				name: "Kunal Sharma",
				text: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet",
			},
		],
	},
];
const WatchPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	}, []);

	let [params] = useSearchParams();
	const id = params.get("v");
	return (
		<div className="mt-6 ml-6 flex flex-col">
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

			<div className="my-6">
				<h3 className="font-bold text-4xl mb-4">Comments</h3>
				<CommentList comments={comments} />
			</div>
		</div>
	);
};

export default WatchPage;
