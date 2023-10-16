import React from "react";
import Login from "../Login";
import { BrowserRouter } from "react-router-dom";

describe("<Login />", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);
	});
});

describe("<Login />", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);
	});

	it("username input should accept typing", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);
		const typedVal = "winnie";
		cy.get("#username").type(typedVal).should("have.value", typedVal);
	});
});
