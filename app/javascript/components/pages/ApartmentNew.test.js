import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentNew from "./ApartmentNew"
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ApartmentNew />
      </BrowserRouter>
    )
  })
  it("renders the ApartmentNew page for user", () => {
    const element = screen.getByText(/Create a new apartment/i)
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent("Create a new apartment")
  })

  it("has a form with entries for street, city, state, manager, email, price, bedrooms, bathrooms, pets, and image", () => {
    const formStreet = screen.getByText("Street")
    expect(formStreet.getAttribute("For")).toEqual("Street")

    const formCity = screen.getByText("City")
    expect(formCity.getAttribute("For")).toEqual("City")

    const formState = screen.getByText("State")
    expect(formState.getAttribute("For")).toEqual("State")

    const formManager = screen.getByText("Manager")
    expect(formManager.getAttribute("For")).toEqual("Manager")

    const formEmail = screen.getByText("Email")
    expect(formEmail.getAttribute("For")).toEqual("Email")

    const formPrice = screen.getByText("Price")
    expect(formPrice.getAttribute("For")).toEqual("Price")

    const formBedrooms = screen.getByText("Bedrooms")
    expect(formBedrooms.getAttribute("For")).toEqual("Bedrooms")

    const formBathrooms = screen.getByText("Bathrooms")
    expect(formBathrooms.getAttribute("For")).toEqual("Bathrooms")

    const formPets = screen.getByText("Pets")
    expect(formPets.getAttribute("For")).toEqual("Pets")

    const formImage = screen.getByText("Image")
    expect(formImage.getAttribute("For")).toEqual("Image")
  })
})


