import React from "react";

const VideoCard = ({ info }) => {
	if (!info) {
		return <h3>Loading</h3>;
	}

	const { snippet, statistics, contentDetails } = info;
	const { licensedContent, duration } = contentDetails;
	const {
		channelTitle,
		description,
		publishedAt,
		title,
		thumbnails,
		channelID,
	} = snippet;
	const { commentCount, likeCount, viewCount } = statistics;
	const { height, width, url } = thumbnails.medium;
	let views, viewsLetter, videoDuration, daysElapsed, daysElapsedWord;
	const convertViewsToReadableFormat = (v) => {
		const digits = v.length;
		if (digits > 6) {
			views = v / 1000000;
			views = views.toFixed(1);
			viewsLetter = "M";
		} else if (digits >= 3 && digits <= 6) {
			views = Math.round(v / 1000);
			viewsLetter = "K";
		} else {
			views = v;
			viewsLetter = "";
		}
	};
	const convertDurationToReadableFormat = (duration) => {
		if (duration.search("M") !== -1) {
			let [minutes, seconds] = duration.slice(2).split("M");
			seconds = seconds.slice(0, seconds.length - 1);
			if (seconds < 10) {
				seconds = "0" + seconds;
			}
			videoDuration = `${minutes}:${seconds}`;
		} else {
			let seconds = duration.slice(2, duration.length - 1);
			if (seconds < 10) {
				seconds = "0" + seconds;
			}
			videoDuration = `0:${seconds}`;
		}
	};
	const getDaysElapsed = (date) => {
		const one_day = 1000 * 60 * 60 * 24;
		const currDate = new Date(date);
		const diff = new Date() - currDate;
		daysElapsed = Math.round(diff / one_day);
		if (daysElapsed >= 365) {
			daysElapsed = daysElapsed / (30 * 12);
			if (daysElapsed > 1) {
				daysElapsedWord = "years";
			} else {
				daysElapsedWord = "year";
			}
		} else if (daysElapsed >= 30) {
			daysElapsed = daysElapsed / 30;
			if (daysElapsed > 1) {
				daysElapsedWord = "months";
			} else {
				daysElapsedWord = "month";
			}
		} else if (daysElapsed >= 7) {
			daysElapsed = daysElapsed / 7;
			if (daysElapsed > 1) {
				daysElapsedWord = "weeks";
			} else {
				daysElapsedWord = "week";
			}
		} else {
			if (daysElapsed > 1) {
				daysElapsedWord = "days";
			} else {
				daysElapsedWord = "day";
			}
		}
	};
	convertViewsToReadableFormat(viewCount);
	convertDurationToReadableFormat(duration);
	getDaysElapsed(publishedAt);
	return (
		<div className="flex flex-col gap-3">
			<div className="relative">
				<img
					src={url}
					alt={title}
					className="rounded-xl"
					height={height}
					width={width}
				/>
				<p className="absolute bg-black text-white p-1 rounded-md bottom-1 right-2">
					{videoDuration}
				</p>
			</div>
			<div className="flex gap-4 items-start ">
				<img
					src={url}
					alt={description}
					className="rounded-full h-10 w-10"
				/>

				<div className="flex flex-col gap-1">
					<p className="truncate font-bold w-56">{title}</p>
					<div className="flex flex-col">
						<p className="truncate">
							{channelTitle} {licensedContent ? "✔️" : ""}
						</p>
						<p>
							{`${views}${viewsLetter} views`}
							{" • "}
							{`${daysElapsed} ${daysElapsedWord}`}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
