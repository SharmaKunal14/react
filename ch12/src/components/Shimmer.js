const Shimmer = () => {
	return (
		<div className="restaurant-list">
			{Array(10)
				.fill("")
				.map((e, ind) => (
					<div key={ind} className="shimmer-card"></div>
				))}
		</div>
	);
};

export default Shimmer;
