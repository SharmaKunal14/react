import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import Header from "../Header";

test("Check header and logo have been loaded", () => {
	const header = render(
		<StaticRouter>
			<Provider store={store}>
				<Header />
			</Provider>
		</StaticRouter>
	);
	const logo = header.getAllByTestId("logo");
	expect(logo[0].src).toBe("http://localhost/dummy.png");
});
test("Cart should have zero items", () => {
	const header = render(
		<StaticRouter>
			<Provider store={store}>
				<Header />
			</Provider>
		</StaticRouter>
	);
	const cart = header.getByTestId("cart");
	expect(cart.innerHTML).toBe("Cart - 0");
});
