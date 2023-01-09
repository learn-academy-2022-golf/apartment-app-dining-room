import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
      div
    );
  });

  it("has clickable links when logged in", () => {
    render(
      <BrowserRouter>
        <Navigation logged_in={true} />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Home"));
    expect(screen.getByText("Home")).toBeInTheDocument();
    userEvent.click(screen.getByText("All Apartments"));
    expect(screen.getByText("All Apartments")).toBeInTheDocument();
    userEvent.click(screen.getByText("Create an Apartment"));
    expect(screen.getByText("Create an Apartment")).toBeInTheDocument();
    userEvent.click(screen.getByText("Sign Out"));
    expect(screen.getByText("Sign Out")).toBeInTheDocument();
    userEvent.click(screen.getByText("My Apartments"));
    expect(screen.getByText("My Apartments")).toBeInTheDocument();
  });

  it("has clickable links when logged out", () => {
    render(
      <BrowserRouter>
        <Navigation logged_in={false} />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Home"));
    expect(screen.getByText("Home")).toBeInTheDocument();
    userEvent.click(screen.getByText("All Apartments"));
    expect(screen.getByText("All Apartments")).toBeInTheDocument();
    userEvent.click(screen.getByText("Sign In"));
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    userEvent.click(screen.getByText("Sign Up"));
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });
});
