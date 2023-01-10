import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Home from "./components/Home";

describe("Home", () => {
  it("render heading", () => {
    <Router>
      render(
      <Home />
      ); expect(screen.getByRole("heading").textContent).toMatch(/^get/i);
    </Router>;
  });
  it("render Buy Button", () => {
    <Router>
      render(
      <Home />
      ); screen.getByText("Buy Now").toBeInTheDocument();
    </Router>;
  });
  it("button direct to Shop", () => {
    <Router>
      render(
      <Home />
      ); const btn = screen.getByText("Buy Now"); userEvent.click(btn);
      expect(screen.getByText("Hoodies")).toBeInTheDocument();
    </Router>;
  });
});
