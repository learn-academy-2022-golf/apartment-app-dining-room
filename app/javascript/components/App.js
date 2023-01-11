import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"

import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import mockApartments from "./mockApartments"
import ProtectedApartmentIndex from "./pages/ProtectedApartmentIndex"

const App = (props) => {
  const [apartments, setApartments] = useState()
  useEffect(() => {
    readApartments()
  }, [])

  const createApartment = (apartment) => {
    console.log("Created Apartment:", apartment);
    fetch("http://localhost:3000/apartments", {
      body: JSON.stringify(apartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => readApartments())
      .catch((errors) => console.log("Apartment create errors:", errors))
  };

  const readApartments = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((payload) => {
        setApartments(payload)
      })
      .catch((error) => console.log(error))
  }

  const updateApartment = (apartment, id) => {
    console.log("Apartment:", apartment);
    console.log("id:", id);
  };

  const deleteApartment = (id) => {
  console.log("id:", id);
  fetch(`http://localhost:3000/apartments/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
    .then((response) => response.json())
    .then((payload) => readApartments())
    .catch((errors) => console.log("delete errors:", errors))
  }


  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>

        <Route exact path="/" element={<Home {...props} />} />
        <Route
          path="/apartmentindex"
          element={<ApartmentIndex apartments={apartments} />}
        />
        <Route
          path="/myapartments/"
          element={
            <ProtectedApartmentIndex
              deleteApartment={deleteApartment}
              apartments={apartments}
              user={props.current_user}
            />
          }
        />
        <Route
          path="/apartmentshow/:id"
          element={<ApartmentShow apartments={apartments} deleteApartment={deleteApartment} />}
        />
        <Route
          path="/apartmentnew"
          element={
            <ApartmentNew
              createApartment={createApartment}
              user={props.current_user}
            />
          }
        />

        <Route
          path="/apartmentedit/:id"
          element={
            <ApartmentEdit
              apartments={apartments}
              updateApartment={updateApartment}
              user={props.current_user}
            />
          }
        />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
