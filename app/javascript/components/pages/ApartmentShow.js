import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams();
  const currentApartment = apartments?.find(
    (apartment) => apartment.id === +id
  );

  return (
    <div>
      {currentApartment && (
        <Card
          style={{
            width: "14rem",
          }}
        >
          <img alt={`apartment`} src={currentApartment.image} />
          <CardBody>
            <p>Price: ${currentApartment.price}</p>
            <p>
              Location:{" "}
              {`${currentApartment.street} ${currentApartment.city}, ${currentApartment.state}`}
            </p>
            <p>Bathrooms: {currentApartment.bathrooms}</p>
            <p>Bedrooms: {currentApartment.bedrooms}</p>
            <p>Manager: {currentApartment.manager}</p>
            <p>Allows Pets: {currentApartment.pets}</p>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default ApartmentShow;
