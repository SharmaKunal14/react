import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		getVideos();
	}, []);

	const getVideos = async () => {
		const videos = await fetch(YOUTUBE_VIDEOS_URL);
		const json = await videos.json();
		// console.log(json);
		setVideos(json.items);
	};
	return (
		<div className="flex flex-wrap gap-5 mt-4 ml-4">
			{videos.map((video) => (
				<Link to={`/watch?v=${video.id}`} key={video.id}>
					<VideoCard info={video} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;
