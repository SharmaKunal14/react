import React from "react";
import { useSelector } from "react-redux";
import SidebarCard from "./SidebarCard";

const Sidebar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
	if (!isMenuOpen) {
		return null;
	}
	const first_list = ["Home", "Shorts", "Live", "Videos"];
	const second_list = ["Music", "Sports", "Entertainment", "Fashion"];
	return (
		<div className="shadow-lg p-4 m-2">
			<SidebarCard title={""} list={first_list} />
			<SidebarCard title={"Subscriptions"} list={second_list} />
		</div>
	);
};

export default Sidebar;
