import React from "react"
import { Card,CardBody,Button } from "reactstrap"
import { NavLink } from "react-router-dom"
import ApartmentShow from "./ApartmentShow"

const ApartmentIndex = ({apartments}) => {

  return (
    <div>
    {apartments?.map((apartment, index) => {
      return (
        <Card
          style={{
            width: "14rem"
          }}
          key={index}
        >
          <img alt={`apartment`} src={apartment.image} />
          <CardBody>
            <p>Price: ${apartment.price}</p>
            <p>Location: {`${apartment.street} ${apartment.city}, ${apartment.state}`}</p>
            <p>Bathrooms: {apartment.bathrooms}</p>
            <p>Bedrooms: {apartment.bedrooms}</p>
            <NavLink to= {`/apartmentshow/${apartment.id}`} className="nav-link">
              <Button>
                See More Details!
              </Button>  
              </NavLink>
          </CardBody>
        </Card>
      )
    })}
  </div> )

}

export default ApartmentIndex
