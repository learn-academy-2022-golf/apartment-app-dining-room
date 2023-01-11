import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const ApartmentEdit = ({ apartments, updateApartment, user }) => {
  if (!apartments || !user) return <div>Loading...</div>;
  const navigate = useNavigate();
  const { id } = useParams();
  const currentApartment = apartments?.find(
    (apartment) => apartment.id === +id
  );
  console.log(currentApartment);
  const [editApartment, setEditApartment] = useState({
    street: currentApartment.street,
    city: currentApartment.city,
    state: currentApartment.state,
    manager: currentApartment.manager,
    email: currentApartment.email,
    price: currentApartment.price,
    bedrooms: currentApartment.bedrooms,
    bathrooms: currentApartment.bathrooms,
    pets: currentApartment.pets,
    image: currentApartment.image,
    user_id: user.id,
  });

  const handleChange = (e) => {
    setEditApartment({ ...editApartment, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateApartment(editApartment, currentApartment.id);
    navigate(`/apartmentshow/${id}`);
  };

  return (
    <div>
      <h1>Edit Apartment</h1>
      <Form>
        <FormGroup>
          <Label for="street">Street</Label>
          <Input
            name="street"
            onChange={handleChange}
            placeholder="What is your street?"
            type="text"
            value={editApartment?.street}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            name="city"
            onChange={handleChange}
            placeholder="What is your city?"
            type="text"
            value={editApartment?.city}
          />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            name="state"
            onChange={handleChange}
            placeholder="What is your state?"
            type="text"
            value={editApartment?.state}
          />
        </FormGroup>
        <FormGroup>
          <Label for="manager">Manager</Label>
          <Input
            name="manager"
            onChange={handleChange}
            placeholder="Who is your manager?"
            type="text"
            value={editApartment?.manager}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            name="email"
            onChange={handleChange}
            placeholder="What is your email?"
            type="text"
            value={editApartment?.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            name="price"
            onChange={handleChange}
            placeholder="What is your ideal price?"
            type="text"
            value={editApartment?.price}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">Bedrooms</Label>
          <Input
            name="bedrooms"
            onChange={handleChange}
            placeholder="How many bedrooms?"
            type="number"
            value={editApartment?.bedrooms}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input
            name="bathrooms"
            onChange={handleChange}
            placeholder="How many bathrooms?"
            type="number"
            value={editApartment?.bathrooms}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pets">Pets</Label>
          <Input
            name="pets"
            onChange={handleChange}
            placeholder="Are pets allowed?"
            type="text"
            value={editApartment?.pets}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            name="image"
            onChange={handleChange}
            placeholder="Please share your image."
            type="url"
            value={editApartment?.image}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit Apartment</Button>
      </Form>
    </div>
  );
};

export default ApartmentEdit;
