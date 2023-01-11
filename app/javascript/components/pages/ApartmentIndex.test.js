import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ApartmentIndex from "./ApartmentIndex"
import { BrowserRouter } from "react-router-dom"
import mockApartments from "../mockApartments"

describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<BrowserRouter><ApartmentIndex apartments={mockApartments} /></BrowserRouter>, div)
    mockApartments.forEach(element => {
      const apartment = screen.getByText("Location: " + element.street + " " + element.city + ", " + element.state)
      expect(apartment).toBeInTheDocument()
    });
  })

  it("has clickable links", () => {
  render(
    <BrowserRouter>
      <ApartmentIndex apartments={mockApartments}/>
    </BrowserRouter>
  );
  expect(screen.getAllByText("See More Details!")).toHaveLength(mockApartments.length);
  })
})