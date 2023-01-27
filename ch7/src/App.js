import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../styles.css";
import Header from "./components/Header";
import About from "./components/About";
import Body from "./components/Body";
import RestaurantDetail from "./components/RestaurantDetail";
import Login from "./components/Login";
import Error from "./components/Error";
const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => (
	<>
		<Header title="Foodsta" />
		<Outlet />
	</>
);
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "restaurant/:resId",
				element: <RestaurantDetail />,
			},
			{ path: "/login", element: <Login /> },
		],
	},
]);

root.render(<RouterProvider router={appRouter} />);
