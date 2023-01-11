import React from "react";
import { render, screen } from "@testing-library/react";
import ApartmentEdit from "./ApartmentEdit";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("<CatEdit />", () => {
  beforeEach(() => {
    const div = document.createElement("div");
    const apartments = [
      {
        id: 1,
        street: "4 Privet Drive",
        city: "Little Whinging",
        state: "Surrey",
        manager: "Mr. Potter",
        email: "potter@example.com",
        price: 2000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image:
          "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
      },
      {
        id: 2,
        street: "15 Yemen Road",
        city: "Yemen",
        state: "Yemen",
        manager: "Mr. Bing",
        email: "bing@example.com",
        price: 1000,
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        image:
          "https://i.pinimg.com/736x/4f/c1/ce/4fc1ce196ea1412f670d477a026ba2c6--saudi-arabia-drawing-reference.jpg",
      },
    ];
    const user = { id: 1 };
    render(
      <MemoryRouter initialEntries={["/apartmentedit/1"]}>
        <Routes>
          <Route
            path="/apartmentedit/:id"
            element={<ApartmentEdit apartments={apartments} user={user} />}
          ></Route>
        </Routes>
      </MemoryRouter>,
      div
    );
  });

  it("has a form with entries for street, city, state, manager, email, price, bedrooms, bathrooms, pets, image", () => {
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
