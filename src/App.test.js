import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

describe("Test Navbar", () => {
  it("Site Name is present", () => {
    <Router>
      render(
      <Navbar />
      ); expect(screen.getByText("DripOn")).toBeInTheDocument();
    </Router>;
  });
  it("Cart Link is present", () => {
    <Router>
      render(
      <Navbar />
      ); 
      expect(screen.getByRole("img")).toBeInTheDocument();
    </Router>;
  });
});

describe("Test Home Page", () => {
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
