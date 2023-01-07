import React from "react"
import { render } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import { BrowserRouter } from "react-router-dom"
import { screen } from "@testing-library/dom"
import mockApartments from "../mockApartments"

describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<BrowserRouter><ApartmentIndex apartments={mockApartments} /></BrowserRouter>, div)
    mockApartments.forEach(element => {
      const apartment = screen.getByText("Location; " + element.street + " " + element.city + ", " + element.state)
      expect(apartment).toBeInTheDocument()
    });
  })
})
