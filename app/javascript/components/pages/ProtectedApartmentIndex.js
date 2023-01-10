import React from 'react'
import { Card, CardBody, Button } from 'reactstrap'

const ProtectedApartmentIndex = ( {apartments, user} ) => {
    console.log(apartments);
    console.log(user);

  return (
    <div>
        {user && apartments?.filter(apartment => apartment.user_id === user.id).map(apartment => {
        return (
            <Card
              style={{
                width: "14rem"
              }}
              key={apartment.id}
            >
              <img alt={`apartment`} src={apartment.image} />
              <CardBody>
                <p>Price; ${apartment.price}</p>
                <p>Location; {`${apartment.street} ${apartment.city}, ${apartment.state}`}</p>
                <p>Bathrooms; {apartment.bathrooms}</p>
                <p>Bedrooms; {apartment.bedrooms}</p>
                <Button>See More Details</Button>
              </CardBody>
            </Card>
          )
    })}
    </div>
)
}

export default ProtectedApartmentIndex