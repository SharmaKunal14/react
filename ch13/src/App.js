import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../styles.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import Header from "./components/Header";
import About from "./components/About";
import Body from "./components/Body";
import RestaurantDetail from "./components/RestaurantDetail";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
import Foodstamart from "./components/Foodstamart";
const Login = lazy(() => import("./components/Login"));

const root = ReactDOM.createRoot(document.getElementById("root"));
// it returns a promise
const App = () => (
	<>
		<Provider store={store}>
			<Header title="Foodsta" />
			<Outlet />
		</Provider>
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
			{ path: "/cart", element: <Cart /> },
			{
				path: "/foodstamart",
				element: <Foodstamart />,
			},
			{
				path: "/login",
				element: (
					<Suspense fallback={<Shimmer />}>
						<Login />
					</Suspense>
				),
			},
		],
	},
]);

root.render(<RouterProvider router={appRouter} />);
