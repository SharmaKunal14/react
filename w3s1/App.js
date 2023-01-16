import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
const ele1 = React.createElement(
	"h1",
	{ id: "header", style: { fontWeight: "150" }, className: ["icon", "text"] },
	"Hello1"
);
const ele2 = React.createElement("h1", { id: "header" }, "Hello2");
const cont = React.createElement("div", { id: "container" }, [ele1, ele2]);
const restaurants = [
	{
		type: "restaurant",
		data: {
			type: "F",
			id: "256400",
			name: "Subway",
			uuid: "bbb9c75d-a552-4b27-a3f2-27bc8f0d80e3",
			city: "128",
			area: "Ranipur",
			totalRatingsString: "100+ ratings",
			cloudinaryImageId: "vp0lplx6krq8pzn49bbt",
			cuisines: [
				"Healthy Food",
				"Salads",
				"Snacks",
				"Desserts",
				"Beverages",
			],
			tags: [],
			costForTwo: 35000,
			costForTwoString: "₹350 FOR TWO",
			deliveryTime: 39,
			minDeliveryTime: 39,
			maxDeliveryTime: 39,
			slaString: "39 MINS",
			lastMileTravel: 4.099999904632568,
			slugs: {
				restaurant: "subway-phagwara-central-phagwara-central",
				city: "phagwara",
			},
			cityState: "128",
			address:
				"Chandigarh Highway Plaza, Phagwara Mohali Expy, Phagwara, Punjab 144401",
			locality: "Phagwara Central",
			parentId: 2,
			unserviceable: false,
			veg: false,
			select: false,
			favorite: false,
			tradeCampaignHeaders: [],
			ribbon: [
				{
					type: "PROMOTED",
				},
			],
			chain: [],
			feeDetails: {
				fees: [
					{
						name: "distance",
						fee: 2400,
						message: "",
					},
					{
						name: "time",
						fee: 0,
						message: "",
					},
					{
						name: "special",
						fee: 0,
						message: "",
					},
				],
				totalFees: 2400,
				message: "",
				title: "Delivery Charge",
				amount: "2400",
				icon: "",
			},
			availability: {
				opened: true,
				nextOpenMessage: "",
				nextCloseMessage: "",
			},
			longDistanceEnabled: 0,
			rainMode: "NONE",
			thirdPartyAddress: false,
			thirdPartyVendor: "",
			adTrackingID:
				"cid=5729450~p=1~eid=00000185-b937-3d20-41e3-623200190112",
			badges: {
				imageBased: [],
				textBased: [],
				textExtendedBadges: [],
			},
			lastMileTravelString: "4 kms",
			hasSurge: false,
			sla: {
				restaurantId: "256400",
				deliveryTime: 39,
				minDeliveryTime: 39,
				maxDeliveryTime: 39,
				lastMileTravel: 4.099999904632568,
				lastMileDistance: 0,
				serviceability: "SERVICEABLE",
				rainMode: "NONE",
				longDistance: "NOT_LONG_DISTANCE",
				preferentialService: false,
				iconType: "EMPTY",
			},
			promoted: true,
			avgRating: "3.6",
			totalRatings: 100,
			new: false,
		},
		subtype: "basic",
	},
];
const Title = () => {
	return <h1>Title</h1>;
};
const Header = () => {
	return (
		<header className="header">
			<img src={require("./logo.jpg")} alt="Food logo" className="logo" />
			<nav>
				<ul className="nav__list">
					<li>Home</li>
					<li>About</li>
					<li>Account</li>
				</ul>
			</nav>
			<div>Cart</div>
		</header>
	);
};
const RestaurantCard = ({ cloudinaryImageId, name, avgRating, cuisines }) => {
	return (
		<div className="card">
			<img
				className="card__img"
				src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
			></img>
			<h2>{name}</h2>
			<h3>{avgRating}</h3>
			<h6>{cuisines.join(", ")}</h6>
		</div>
	);
};
const Body = () => {
	return (
		<div className="restaurant-list">
			{restaurants.map((restaurant) => (
				<RestaurantCard {...restaurant.data} />
			))}
		</div>
	);
};
const App = () => (
	<>
		<Header />
		<Body />
	</>
);
root.render(<App />);
