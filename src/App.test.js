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
      );
    </Router>;
    expect(screen.getByText("DripOn")).toBeInTheDocument();
  });
  it("Cart Link is present", () => {
    <Router>
      render(
      <Navbar />
      );
    </Router>;
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});

describe("Test Home Page", () => {
  it("render heading", () => {
    <Router>
      render(
      <Home />
      );
    </Router>;
    expect(screen.getByRole("heading").textContent).toMatch(/^get/i);
  });
  it("render Buy Button", () => {
    <Router>
      render(
      <Home />
      );
    </Router>;
    screen.getByText("Buy Now").toBeInTheDocument();
  });
  it("button direct to Shop", () => {
    <Router>
      render(
      <Home />
      );
    </Router>;
    const btn = screen.getByText("Buy Now");
    userEvent.click(btn);
    expect(screen.getByText("Hoodies")).toBeInTheDocument();
  });
});
