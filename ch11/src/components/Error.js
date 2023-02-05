import { useRouteError } from "react-router-dom";
import Header from ".//Header";

const Error = () => {
	const err = useRouteError();
	// console.log(err);
	return (
		<>
			<Header />
			<h1>OOPSS!!</h1>
			<p>{err?.status + " " + err?.data}</p>
		</>
	);
};

export default Error;
