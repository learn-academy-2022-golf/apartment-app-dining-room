import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render } from "@testing-library/react"
import ProtectedApartmentIndex from "./ProtectedApartmentIndex"
import { screen } from "@testing-library/dom"
import apartments from "../mockApartments"

describe("<ProtectedApartmentIndex />", () => {
    it("renders without crashing", () => {

      const div = document.createElement("div")
      render(
      <BrowserRouter>
      <ProtectedApartmentIndex apartment={[{ 
        user_id:1,
        image:"https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg",
        price:2000,
        street:"4 Privet Drive",
        city:"Little Whinging",
        state:"Surrey",
        bathrooms: 2,
        bedrooms: 3,
    }]} user = {{id:1}} 
     />
      </BrowserRouter>, div)
        apartments.forEach(element => {
            const apartment = screen.getByText("Location; " + element.street + " " + element.city + ", " + element.state)
            expect(apartment).toBeInTheDocument()
        })
    })
})
// Price; $2000

// Location; 4 Privet Drive Little Whinging, Surrey

// Bathrooms; 2

// Bedrooms; 3