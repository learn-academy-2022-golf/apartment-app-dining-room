import React from "react";
import { render, screen } from "@testing-library/react";
import ApartmentNew from "./ApartmentNew";
import { BrowserRouter } from "react-router-dom";

describe("<ApartmentNew />", () => {
  beforeEach(() => {
    const user = { id: 1 };
    render(
      <BrowserRouter>
        <ApartmentNew user={user} />
      </BrowserRouter>
    );
  });
  it("renders the ApartmentNew page for user", () => {
    const element = screen.getByText(/Create a new apartment/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Create a new apartment");
  });

  it("has a form with entries for street, city, state, manager, email, price, bedrooms, bathrooms, pets, and image", () => {
    const formStreet = screen.getByText("Street");
    expect(formStreet.getAttribute("For")).toEqual("street");

    const formCity = screen.getByText("City");
    expect(formCity.getAttribute("For")).toEqual("city");

    const formState = screen.getByText("State");
    expect(formState.getAttribute("For")).toEqual("state");

    const formManager = screen.getByText("Manager");
    expect(formManager.getAttribute("For")).toEqual("manager");

    const formEmail = screen.getByText("Email");
    expect(formEmail.getAttribute("For")).toEqual("email");

    const formPrice = screen.getByText("Price");
    expect(formPrice.getAttribute("For")).toEqual("price");

    const formBedrooms = screen.getByText("Bedrooms");
    expect(formBedrooms.getAttribute("For")).toEqual("bedrooms");

    const formBathrooms = screen.getByText("Bathrooms");
    expect(formBathrooms.getAttribute("For")).toEqual("bathrooms");

    const formPets = screen.getByText("Pets");
    expect(formPets.getAttribute("For")).toEqual("pets");

    const formImage = screen.getByText("Image");
    expect(formImage.getAttribute("For")).toEqual("image");
  });
});
