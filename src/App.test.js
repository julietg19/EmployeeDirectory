import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Employee Directory title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Employee Directory/i);
  expect(linkElement).toBeInTheDocument();
});

test("checking tables", () => {
  const tableElemant = document.createElement("table");
  render(<App />, tableElemant);
});
