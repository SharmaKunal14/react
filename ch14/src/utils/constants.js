const YOUTUBE_API_KEY = "AIzaSyAQoZmnwC2-RTwW4Dqi773P2nb_1mCORjc";
export const YOUTUBE_VIDEOS_URL =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
	YOUTUBE_API_KEY;

export const YOUTUBE_CHANNEL_URL =
	"https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
	YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS =
	"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
