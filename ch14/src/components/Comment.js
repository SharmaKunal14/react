import React from "react";

const Comment = ({ comment }) => {
	return (
		<div className="mt-4 mb-1 flex justify-start align-top gap-2 bg-slate-200 p-2 border border-black">
			<img
				src={`https://picsum.photos/id/${Math.round(
					Math.random() * 100
				)}/200/300`}
				className="rounded-full h-10 w-10"
				alt={comment.name}
			/>
			<div>
				<h5>{comment.name}</h5>
				<p>{comment.text}</p>
			</div>
		</div>
	);
};

export default Comment;
