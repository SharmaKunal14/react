import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
const ele1 = React.createElement(
	"h1",
	{ id: "header", style: { fontWeight: "150" }, className: ["icon", "text"] },
	"Hello1"
);
const ele2 = React.createElement("h1", { id: "header" }, "Hello2");
const cont = React.createElement("div", { id: "container" }, [ele1, ele2]);
root.render(cont);
