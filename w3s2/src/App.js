import React from "react";
import ReactDOM from "react-dom/client";
import "../styles.css";
import Header from "./components/Header";
import Body from "./components/Body";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => (
	<>
		<Header title="Foodsta" />
		<Body />
	</>
);
root.render(<App />);
