import React from "react";
import AllDrinks from "../AllDrinks";
import { BrowserRouter } from "react-router-dom";

describe("<AllDrinks />", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(
			<BrowserRouter>
				<AllDrinks />
			</BrowserRouter>
		);
	});

	it("search input should accept typing", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(
			<BrowserRouter>
				<AllDrinks />
			</BrowserRouter>
		);
		const typedVal = "Tuna";
		cy.get("#formInput").type(typedVal).should("have.value", typedVal);
	});
});
