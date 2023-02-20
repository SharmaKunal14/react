import React, { useState, useEffect } from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
	const [renderedComments, setRenderedComments] = useState([]);
	useEffect(() => {
		setRenderedComments(comments);
	}, []);

	if (!comments) {
		return <></>;
	}

	return (
		<div classname="">
			{renderedComments.map((comment, index) => {
				return (
					<div>
						<Comment comment={comment} key={index} />
						<div className="px-4 bg-gray-200 mx-2 border border-l-black">
							<CommentList comments={comment.replies} />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CommentList;
