import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom"


describe("<Home />", () => {
  it("renders welcome message when, users are logged in.", () => {
    const div = document.createElement("div")
      render(<BrowserRouter><Home logged_in={true} /></BrowserRouter>, div)
     const element = screen.getByText("Welcome User, to your new Apartment.")
     expect(element).toBeInTheDocument()
  })

  it("renders welcome message when, users is not logged in.", () => {
    const div = document.createElement("div")
      render(<BrowserRouter><Home logged_in={false} /></BrowserRouter>, div)
     const element = screen.getByText("Welcome.")
     expect(element).toBeInTheDocument()
  })

})
