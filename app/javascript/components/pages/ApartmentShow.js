import React from "react";
import { useParams , NavLink} from "react-router-dom";
import { Card, CardBody, Button } from "reactstrap";

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams();
  const currentApartment = apartments?.find(
    (apartment) => apartment.id === +id
  );

  return (
    <div>
      {currentApartment && (
        <div className="show-background">
        <Card 
          style={{
            width: "14rem",
          }}
        className="show-card">
          <img alt={`apartment`} src={currentApartment.image}/>
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
            <div className="show-buttons">
            <NavLink to= "/apartmentindex/" className="nav-link">
              <Button>
                Go Back to All Apartments!
              </Button>  
              </NavLink>
           <NavLink to= {`/apartmentedit/${currentApartment.id}`} className="nav-link">
              <Button>
                Update Apartment! 
              </Button>  
           </NavLink>
           <NavLink to= "/myapartments/" className="nav-link">
              <Button>
                Delete Apartment! 
              </Button>  
           </NavLink>
           </div>
          </CardBody>
        </Card>
        </div>
      )}
    </div>
  );
};

export default ApartmentShow;
