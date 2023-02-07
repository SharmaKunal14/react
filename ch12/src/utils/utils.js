export function filterData(search, restaurantList) {
	const data = restaurantList.filter((restaurant) =>
		restaurant?.data?.name?.toLowerCase()?.includes(search.toLowerCase())
	);
	return data;
}
