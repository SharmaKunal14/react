import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
class App extends React.Component {
	render() {
		return (
			<>
				<Home />
				<Outlet />
			</>
		);
	}
}
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [{ path: "/about", element: <About /> }],
	},
]);
root.render(<RouterProvider router={appRouter} />);
